import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    moduleId: module.id
})

export class HomeComponent {
    constructor(private router: Router) {}
    userName = 'Zé';
    points = 524;

    navigateToLogin() {
       this.router.navigateByUrl('/login');
    }
}
