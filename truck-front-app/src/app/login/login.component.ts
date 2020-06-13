import { Component } from "@angular/core";
import {Router} from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    moduleId: module.id
})

export class LoginComponent {
    constructor(private router: Router) {}

    email = '';
    password = '';
    name = '';
    phoneNumber = '';
    confirmPassword = '';
    isNewUser = false;

    submitUserInfo() {
        console.log('clickando!!')
    }

    navigateToPasswordRecovery() {
       this.router.navigateByUrl('/password-recovery');
    }
}
