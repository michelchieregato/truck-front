import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})
export class ClientService {
    defaultApi = 'http://192.168.0.24:8000/';

    constructor(private http: HttpClient) {
    }

    getDestinationsList() {
        return this.http.get(this.defaultApi + 'destinations/');
    }

    createDestination(infos: {from_name, from_location, to_name, to_location}) {
        return this.http.post(this.defaultApi + 'destinations/', infos);
    }
}
