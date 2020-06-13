import { Component } from "@angular/core";
import {Router} from '@angular/router';

@Component({
    selector: 'sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['../login/login.component.scss'],
    moduleId: module.id
})

export class SignUpComponent {
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

    navigateToLogin() {
       this.router.navigateByUrl('/login');
    }

    navigateToPasswordRecovery() {
       this.router.navigateByUrl('/password-recovery');
    }
}
