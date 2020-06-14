import {Component} from "@angular/core";
import {Router} from '@angular/router';
import {ClientService} from "~/app/services/client.service";
import {UserService} from "~/app/services/user.service";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    moduleId: module.id
})

export class LoginComponent {
    email = '';
    password = '';
    sending = false;

    constructor(private router: Router, private userService: UserService) {
    }

    submitUserInfo() {
        this.sending = true;
        this.userService.login({email: this.email, password: this.password}).subscribe(
            (response) => {
                console.log(response);
                this.sending = false;
            },
            (err) => {
                console.log(err);
                this.sending = false;
            }
        )
    }

    navigateToPasswordRecovery() {
        this.router.navigateByUrl('/password-recovery');
    }

    navigateToSignUp() {
        this.router.navigateByUrl('/sign-up');
    }
}
