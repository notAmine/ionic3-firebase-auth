import { Component } from '@angular/core';

import { IMarker, IPoint } from './interfaces';

@Component({
	templateUrl: 'google-maps.html'
})
export class GoogleMapsPage {
	public markers: IMarker[];
	public origin: IPoint;
	public zoom: number;
	public url:any;

	constructor() {
		this.initMarkers();
		this.url = 'https://github.com/notAmine/ionic-maps/blob/master/src/assets/KML/Cinemas.kmz?raw=true';
		this.origin = {
			lat: 36.831072,
			lng: 10.147438,
		};
		this.zoom = 8;
	}

	public clickedMarker(label: string) {
		window.alert(`clicked the marker: ${label || ''}`);
	}

	private initMarkers(): void {
		this.markers = [{
			lat: 51.673858,
			lng: 7.815982,
			label: 'A'
		}, {
			lat: 51.373858,
			lng: 7.215982,
			label: 'B'
		}, {
			lat: 51.723858,
			lng: 7.895982,
			label: 'C'
		}];
	}
}
