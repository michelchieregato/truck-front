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
    address: string;
    workingTime: string;
    imagePath: string
    messages: Array<any>

    constructor(name, distance, services, rating, types, imagePath) {
        this.name = name;
        this.distance = distance;
        this.services = services;
        this.rating = rating;
        this.types = types;
        this.imagePath = imagePath;
    }

    addDetails(address, workingTime, messages) {
        this.address = address;
        this.workingTime = workingTime;
        this.messages = messages;
    }

    get distanceDisplay() {
        return (this.distance / 1000).toString() + 'km'
    }
}
