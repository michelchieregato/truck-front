import {Component, OnInit} from '@angular/core';
import {registerElement} from "nativescript-angular/element-registry";
registerElement("MapView", () => require("nativescript-google-maps-sdk").MapView);
import * as Geolocation from 'nativescript-geolocation';
const mapsModule = require('nativescript-google-maps-sdk');


@Component({
    selector: 'ns-surroundings',
    templateUrl: './surroundings.component.html',
    styleUrls: ['./surroundings.component.css']
})
export class SurroundingsComponent implements OnInit {
    latitude = -23.350396;
    longitude = -46.797085;
    marker: any;
    zoom = 15;
    ready = false;

    constructor() {
    }

    ngOnInit(): void {
        Geolocation.enableLocationRequest(true).then(() => {
            Geolocation.getCurrentLocation({}).then((location) => {
                this.longitude = location.longitude;
                this.latitude = location.latitude;
                this.ready = true;
            }).catch(e => {
                alert('Não conseguimos localizar você! Tente de novo mais tarde');
                this.ready = true;
            });
        }).catch(() => {
            alert('O aplicativo nãoo funciona com todo seu potencial sem localização');
            this.ready = true;
        });
    }

    setMarker(event) {
        let mapView = event.object;
        this.marker = new mapsModule.Marker();
        this.marker.position = mapsModule.Position.positionFromLatLng(this.latitude, this.longitude);
        mapView.addMarker(this.marker);
    }
}
