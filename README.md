# maplibre-gl-export

![License](https://img.shields.io/github/license/erictheise/maplibre-gl-export)
![build](https://github.com/erictheise/maplibre-gl-export/workflows/build/badge.svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/2ca781c3-2680-4c17-9219-4992c1f2a44e/deploy-status)](https://app.netlify.com/sites/maplibre-gl-export/deploys)
![GitHub repo size](https://img.shields.io/github/repo-size/erictheise/maplibre-gl-export)

This is a fork of https://github.com/watergis/maplibre-gl-export. I include upstream documentation (README, LICENSE, etc.) in [`./upstream/`](./upstream/) and use this README to document my changes and usage.

## Changes/emphases

- the upstream project is a monorepo but I am only developing against the `./maplibre-gl-js` project. The status of `./mapbox-gl-js` here is unknown and untested.
- I `hide` the north indicator and attribution string, not because I'm trying to get away with anything but because this work is toward a print project where the attribution will be given in a printed colophon page.

## Gotchas

- a `build` in the upstream project builds both packages as well as a demo site. The demo site requires that `PUBLIC_MAPBOX_ACCESSTOKEN` appear in `sites/demo/.env`; for my work, the token does not need to be valid or even set to a value, but it's impossible to commit to one's own GitHub repo without, say, copying `sites/demo/.env-example` to `sites/demo/.env`. It has been discussed here: https://github.com/watergis/maplibre-gl-export/issues/243.
