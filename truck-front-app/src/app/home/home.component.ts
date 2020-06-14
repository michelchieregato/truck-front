import {Component, OnInit} from "@angular/core";
import {Router} from '@angular/router';
import {User, UserService} from "~/app/services/user.service";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    moduleId: module.id
})

export class HomeComponent implements OnInit {
    user: User;
    points = 524;

    constructor(private router: Router, private userService: UserService) {
    }

    ngOnInit() {
        this.user = this.userService.currentUserSubject.getValue();
        console.log(this.user);
    }

    navigateToLogin() {
        this.router.navigateByUrl('/login');
    }
}
