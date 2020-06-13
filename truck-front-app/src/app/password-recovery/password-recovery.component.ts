import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'password-recovery',
    templateUrl: './password-recovery.component.html',
    styleUrls: ['../login/login.component.scss'],
    moduleId: module.id
})

export class PasswordRecoveryComponent {
    constructor(private router: Router) {}

    email = '';
    emailSent = false;

    sendPasswordRecoveryEmail() {
        this.emailSent = true;
    }

    navigateToLogin() {
       this.router.navigateByUrl('/login');
    }

    navigateToSignUp() {
       this.router.navigateByUrl('/sign-up');
    }
}
