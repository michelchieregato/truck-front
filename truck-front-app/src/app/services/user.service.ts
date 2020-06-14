import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    defaultApi = 'http://0.0.0.0:8000/';

    constructor(private http: HttpClient) {
    }

    login(auth: { email, password }) {
        return this.http.post(this.defaultApi + 'user/token/', auth);
    }

    create(infos: {name, phone, email, password}) {
        return this.http.post(this.defaultApi + 'user/create/', infos)
    }
}
