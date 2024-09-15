import { type ControlOptions as MaplibreControlOptions } from '@erictheise/maplibre-gl-export';

export interface ControlOptions extends MaplibreControlOptions {
	accessToken?: string;
}
