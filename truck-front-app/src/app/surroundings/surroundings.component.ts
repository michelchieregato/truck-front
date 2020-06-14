import {Component, OnInit} from '@angular/core';
import {registerElement} from "nativescript-angular/element-registry";
registerElement("MapView", () => require("nativescript-google-maps-sdk").MapView);
import * as Geolocation from 'nativescript-geolocation';
import { Accuracy } from "tns-core-modules/ui/enums";
import {isEnabled} from "nativescript-geolocation";


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
        Geolocation.enableLocationRequest(true).then(() => {
            Geolocation.isEnabled().then((isEnabled) => {
                if (isEnabled) {
                    Geolocation.getCurrentLocation({timeout: 5000}).then((location) => {
                        this.longitude = location.longitude;
                        this.latitude = location.latitude;
                    }).catch(e => {
                        alert('Não localizamos você! Tente de novo mais tarder');
                    });
                }
            });
        });
    }
}
