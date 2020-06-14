import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "~/app/services/user.service";

@Injectable({
    providedIn: 'root'
})
export class PlaceService {
    currentPlaceSubject = new BehaviorSubject<Place>(null);
    currentPlace = this.currentPlaceSubject.asObservable();

    constructor() {
    }
}

export class Place {
    name: string;
    distance: 1500;
    services: string;
    rating: number;
    types: Array<any>;

    constructor(name, distance, services, rating, types) {
        this.name = name;
        this.distance = distance;
        this.services = services;
        this.rating = rating;
        this.types = types;
    }

    get distanceDisplay() {
        return (this.distance / 1000).toString() + 'km'
    }
}
