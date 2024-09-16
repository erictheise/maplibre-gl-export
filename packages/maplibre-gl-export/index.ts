import maplibregl, { Map, NavigationControl, TerrainControl } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { MaplibreExportControl, Size, PageOrientation, Format, DPI } from './src/lib/index';
import './src/scss/maplibre-gl-export.scss';
import { Protocol } from 'pmtiles';

const protocol = new Protocol();
maplibregl.addProtocol('pmtiles', protocol.tile);

const map = new Map({
	container: 'map',
	style: 'https://narwassco.github.io/mapbox-stylefiles/unvt/style-aerial.json',
	center: [0, 0],
	zoom: 1,
	hash: true,
	attributionControl: false
});

map.addControl(new NavigationControl({ visualizePitch: true }), 'top-right');
map.addControl(new maplibregl.AttributionControl({ compact: false }), 'bottom-right');
map.addControl(
	new MaplibreExportControl({
		PageSize: Size.Moonstrips,
		PageOrientation: PageOrientation.Landscape,
		Format: Format.PDF,
		DPI: DPI[300],
		Crosshair: false,
		PrintableArea: true,
		Local: 'en',
		attributionOptions: {
			position: 'bottom-right',
			visibility: 'none'
		},
		northIconOptions: {
			position: 'top-right',
			visibility: 'none'
		}
	}),
	'top-right'
);

map.once('load', () => {
	new maplibregl.Marker().setLngLat([37.30467, -0.15943]).addTo(map);

	if (map.getSource('terrarium')) {
		map.addControl(
			new TerrainControl({
				source: 'terrarium',
				exaggeration: 1
			}),
			'top-right'
		);

		map.setMaxPitch(85);
	}
});
