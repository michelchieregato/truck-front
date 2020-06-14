import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ClientService {
    defaultApi = 'http://0.0.0.0:8000/';

    constructor(private http: HttpClient) {
    }

    login(auth: {email, password}) {
        return this.http.post(this.defaultApi + 'user/token/', auth);
    }
}
