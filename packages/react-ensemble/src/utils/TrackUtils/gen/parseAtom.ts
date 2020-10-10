import {
  ICalculatedTrackRegion,
  ITrackConfig,
  ITrackRegion,
  ITrackRegionAtom,
  IValidatedTrackRegionAtom
} from "../trackUtils.types";
import { newId } from "./helpers";
import { genLoopRegion } from "./loop";
import { findRegionBoundsAndPad } from "./pad";
import { createDeltaState, buildAtomicStateInterpolator } from "./stateUtils";

export const parseAtom = <State extends object>(
  region: ITrackRegionAtom,
  index: number,
  currentTime: number,
  workingState: State,
  layerName: string,
  track: ITrackRegion<State>[],
  config: Required<ITrackConfig<State>>
) => {
  const boundResult = findRegionBoundsAndPad(
    region,
    index,
    currentTime,
    workingState,
    layerName,
    track
  );

  const { start, end, duration, newTime, padRegion } = boundResult;

  let willUpdateToTime = newTime;
  const newRegions: ICalculatedTrackRegion[] = [];
  let newWorkingState = workingState;
  let determinedEndsWithPassiveLoop = false;

  if (padRegion) {
    newRegions.push(padRegion);
  }

  const providedState = region.state || {};
  const providedLoop = region.loop ?? false;

  const { state, regionState } = createDeltaState(
    newWorkingState,
    providedState
  );

  const partialRegion = {
    id: newId("region"),
    start,
    duration,
    end,
    state: regionState,
    easing: region.easing ?? null,
    interp: region.interp ?? null,
    layer: layerName,
    activeVars: new Set(Object.keys(providedState)) as Set<keyof State>,
    loop: providedLoop
  };

  const stateInterpolator = buildAtomicStateInterpolator(partialRegion, config);

  const stateGetter = (current: number) => stateInterpolator(current).state;
  let restRegionConfig: { get: (current: number) => State } & Partial<
    IValidatedTrackRegionAtom<State>
  > = { get: stateGetter };

  if (providedLoop) {
    let nextRegionStart: number | undefined;
    const atEnd = index === track.length - 1;

    if (!atEnd) {
      nextRegionStart = track[index + 1].start;
      if (!nextRegionStart || nextRegionStart < end) {
        throw new Error(
          `If a passive loop region takes place before the last region of a track, the following region must have its start property defined`
        ); // TODO describe better
      }
    }

    const { loopGetter, newDuration, newEnd, isPassive } = genLoopRegion(
      partialRegion,
      stateGetter,
      nextRegionStart
    );

    if (atEnd && isPassive) {
      determinedEndsWithPassiveLoop = true;
    } else {
      willUpdateToTime = newEnd;
    }

    restRegionConfig = {
      get: loopGetter,
      duration: newDuration,
      end: newEnd
    };
  }

  const fullRegion = {
    ...partialRegion,
    ...restRegionConfig
  };

  newRegions.push(fullRegion);
  newWorkingState = state;

  return {
    willUpdateToTime,
    newRegions,
    newWorkingState,
    determinedEndsWithPassiveLoop
  };
};