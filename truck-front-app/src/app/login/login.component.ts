import {Component} from "@angular/core";
import {Router} from '@angular/router';
import {ClientService} from "~/app/services/client.service";

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

    constructor(private router: Router, private clientService: ClientService) {
    }

    submitUserInfo() {
        this.sending = true;
        this.clientService.login({email: this.email, password: this.password}).subscribe(
            (response) => {
                console.log(response);
            },
            (err) => {
                console.log(err);
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
