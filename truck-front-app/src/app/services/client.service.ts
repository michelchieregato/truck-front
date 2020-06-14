import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})
export class ClientService {
    defaultApi = 'http://0.0.0.0:8000/';

    constructor(private http: HttpClient) {
    }

    getDestinationsList() {
        return this.http.get(this.defaultApi + 'destinations/');
    }
}
