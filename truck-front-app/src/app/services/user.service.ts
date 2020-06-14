import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    defaultApi = 'http://0.0.0.0:8000/';
    currentUserSubject = new BehaviorSubject<User>(null);
    currentUser = this.currentUserSubject.asObservable();

    constructor(private http: HttpClient) {
    }

    login(auth: { email, password }) {
        return this.http.post(this.defaultApi + 'user/token/', auth);
    }

    create(infos: {name, phone, email, password}) {
        return this.http.post(this.defaultApi + 'user/create/', infos)
    }
}

export class User {
    name: string;
    phone: string;
    email: string;
    points: number;
    token: string;


    constructor(name, email, phone, points, token) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.points = points;
        this.token = token;
    }
}
