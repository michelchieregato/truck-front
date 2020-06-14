import { Component } from "@angular/core";
import { Router } from '@angular/router';
import {UserService} from "~/app/services/user.service";

@Component({
    selector: 'sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['../login/login.component.scss'],
    moduleId: module.id
})

export class SignUpComponent {
    constructor(private router: Router, private userService: UserService) {}

    email = '';
    password = '';
    name = '';
    phoneNumber = '';
    confirmPassword = '';
    isNewUser = false;
    sending = false;

    submitUserInfo() {
        this.sending = true;
        console.log('clickando!!')

        if (this.password !== this.confirmPassword) {
            console.error('As senhas não dão são iguais');
            return;
        }

        console.log(this.userService);
        console.log(this.userService.create);

        this.userService.create({
            email: this.email,
            phone: this.phoneNumber,
            password: this.password,
            name: this.name,
        }).subscribe(
            (response) => {
                console.log(response);
                this.sending = false;
            },
            (err) => {
                this.sending = false;
            }
        )
    }

    navigateToLogin() {
       this.router.navigateByUrl('/login');
    }

    navigateToPasswordRecovery() {
       this.router.navigateByUrl('/password-recovery');
    }
}
