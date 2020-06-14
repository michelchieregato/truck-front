import {Component, OnInit} from '@angular/core';
import {registerElement} from "nativescript-angular/element-registry";
registerElement("MapView", () => require("nativescript-google-maps-sdk").MapView);
import * as Geolocation from 'nativescript-geolocation';
import { Accuracy } from "tns-core-modules/ui/enums";


@Component({
    selector: 'ns-surroundings',
    templateUrl: './surroundings.component.html',
    styleUrls: ['./surroundings.component.css']
})
export class SurroundingsComponent implements OnInit {
    latitude = -23.350396;
    longitude = -46.797085;
    zoom = 15;
    bearing = 180;
    tilt = 35;
    padding = [80, 40, 40, 40];
    mapAnimationsEnabled = true;

    constructor() {
    }

    ngOnInit(): void {
        console.log('try');
        Geolocation.enableLocationRequest(true).then((isLocationEnabled) => {
            console.log(isLocationEnabled);
        });
    }
}
