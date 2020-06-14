import {Component, OnInit} from '@angular/core';
import {registerElement} from "nativescript-angular/element-registry";
registerElement("MapView", () => require("nativescript-google-maps-sdk").MapView);

@Component({
    selector: 'ns-surroundings',
    templateUrl: './surroundings.component.html',
    styleUrls: ['./surroundings.component.css']
})
export class SurroundingsComponent implements OnInit {
    type: string = 'health';
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
    }

    getNearLocationsOfType(type: string) {
        this.type = type;
    }

}
