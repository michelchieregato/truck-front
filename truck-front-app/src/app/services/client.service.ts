import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})
export class ClientService {
    defaultApi = 'http://192.168.0.24:8000/';

    constructor(private http: HttpClient) {
    }

    getDestinationsList(onlyFavorites) {
        const params = onlyFavorites ? {is_favorite: 'true'} : {};

        return this.http.get(this.defaultApi + 'destinations/', {params: params});
    }

    createDestination(infos: {from_name, from_location, to_name, to_location, to_latitude, to_longitude, from_latitude, from_longitude}) {
        return this.http.post(this.defaultApi + 'destinations/', infos);
    }

    getMessages(placeName) {
        const params = {place: placeName};

        return this.http.get(this.defaultApi + 'places/messages', {params: params});
    }

    getLocations(data?) {
        const params = data ? data : {};
        return this.http.get(this.defaultApi + 'places/', {params: params});
    }
}
