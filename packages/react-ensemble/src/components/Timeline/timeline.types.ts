import { IAnimation } from "../../utils/TrackUtils/trackUtils.types";

/**
 * Event returned by `Timeline` on each tick
 */
export interface ITickEvent {
  /** The track's time position (in ms) */
  value: number;
}

export interface IUpdateEvent<State extends object = any> {
  state: State;
}

export interface ILoadEvent<State extends object = any> {
  animation: IAnimation<State>;
}
