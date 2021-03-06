# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.1.0](https://github.com/jcowman2/react-ensemble/compare/react-ensemble@1.0.1...react-ensemble@1.1.0) (2020-10-18)


### Features

* **react-ensemble:** add avoidReload prop to Timeline to allow altering track after init ([710fc19](https://github.com/jcowman2/react-ensemble/commit/710fc19a76de99ab624de3df6e5b2d7a7a9e7439))





## [1.0.1](https://github.com/jcowman2/react-ensemble/compare/react-ensemble@1.0.0...react-ensemble@1.0.1) (2020-10-17)

**Note:** Version bump only for package react-ensemble





# [1.0.0](https://github.com/jcowman2/react-ensemble/compare/react-ensemble@0.4.0...react-ensemble@1.0.0) (2020-10-17)


### Bug Fixes

* **react-ensemble:** remove check if 'to' is interpolatable and account for regions that just ended ([5a44d3f](https://github.com/jcowman2/react-ensemble/commit/5a44d3f9071a7adb0cc9a51999c397424b1d6079))
* **react-ensemble:** use export type to be compatible with Babel ([70fcfa9](https://github.com/jcowman2/react-ensemble/commit/70fcfa92fd17c0c0a2159c94132403140338ed24))


### Features

* **react-ensemble:** add SimpleControlPanel to public exports (and add API docs) ([8dd812f](https://github.com/jcowman2/react-ensemble/commit/8dd812f1b0d92c389c0409758d025c7321ad9c99))
* **react-ensemble:** public exports for TrackUtils types ([fcb50cc](https://github.com/jcowman2/react-ensemble/commit/fcb50cc8022c704363b72dbd4751ee1613585d29))





# [0.4.0](https://github.com/jcowman2/react-ensemble/compare/react-ensemble@0.3.0...react-ensemble@0.4.0) (2020-10-15)


### Code Refactoring

* **react-ensemble:** drop the 'I' prefix from all interfaces ([71cd693](https://github.com/jcowman2/react-ensemble/commit/71cd69312234de1ce9311cf58dc0b519a499324d))


### BREAKING CHANGES

* **react-ensemble:** Many interfaces were renamed.





# [0.3.0](https://github.com/jcowman2/react-ensemble/compare/react-ensemble@0.2.0...react-ensemble@0.3.0) (2020-10-14)


### Bug Fixes

* **react-ensemble:** fix the way activeVars are calculated in TrackUtils.gen ([143dc93](https://github.com/jcowman2/react-ensemble/commit/143dc930b0aae573e267e885a5e640f571f2d2c3))


### Features

* **react-ensemble:** add experimental grouping support to TrackUtils.gen() ([9f176ac](https://github.com/jcowman2/react-ensemble/commit/9f176acc8bc6e6b5fbd478657e3c97edf9da46f4))
* **react-ensemble:** add group and loop to TrackUtils ([89dd3e3](https://github.com/jcowman2/react-ensemble/commit/89dd3e3d191225f4e00d6e7e31a925e46ff08ba3))
* **react-ensemble:** add layer and multi to TrackUtils ([f748ce1](https://github.com/jcowman2/react-ensemble/commit/f748ce1123105c88123af192a211858514618b5c))
* **react-ensemble:** allow group-specific animation config ([21142f2](https://github.com/jcowman2/react-ensemble/commit/21142f227a7a5bad7a4218f1a3349c3001e505c8))
* **react-ensemble:** better error reporting on invalid fields for group/atom and refactoring types ([d41eeae](https://github.com/jcowman2/react-ensemble/commit/d41eeae1e951d136c702606d18840ec114bfa589))
* **react-ensemble:** better error reporting throughout TrackUtils.gen() ([a4f931e](https://github.com/jcowman2/react-ensemble/commit/a4f931e9f3451284d7631fd73885081305695472))
* **react-ensemble:** expose overrideLast layer resolver at TrackUtils.layerResolvers.overrideLast ([7c7b09c](https://github.com/jcowman2/react-ensemble/commit/7c7b09c9c09df046e05c43e36062c5e05b42f023))
* **react-ensemble:** support looping for region groups ([8d77176](https://github.com/jcowman2/react-ensemble/commit/8d771760f5a02661cf55d6b3b87d18a157bbeef3))
* **react-ensemble:** support relativeTime in region groups ([d0fad17](https://github.com/jcowman2/react-ensemble/commit/d0fad17b26442115f03c3f8c7ea4e5c0516902a8))





# [0.2.0](https://github.com/jcowman2/react-ensemble/compare/react-ensemble@0.1.1...react-ensemble@0.2.0) (2020-10-09)


### Bug Fixes

* **react-ensemble:** change react peer dependency to >=16.8.0 ([56e6381](https://github.com/jcowman2/react-ensemble/commit/56e6381bf284be3ba97ccea7c7d58bfab3170c23))


### Features

* **react-ensemble:** change all 'State extends object = {}' to '= any' in generics ([7ac2bc8](https://github.com/jcowman2/react-ensemble/commit/7ac2bc8aec4c054b9cdce14c22277e7d82681cfb))





## 0.1.1 (2020-09-17)

**Note:** Version bump only for package react-ensemble
