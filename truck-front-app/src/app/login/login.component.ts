import {Component} from "@angular/core";
import {Router} from '@angular/router';
import {User, UserService} from "~/app/services/user.service";
import {alert} from "tns-core-modules/ui/dialogs";

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
            (response: any) => {
                console.log(response);
                const user = new User(response.user.name, response.user.email, response.user.phone,
                    response.user.points, response.token);
                this.userService.currentUserSubject.next(user);
                this.router.navigateByUrl('/home');
                this.sending = false;
            },
            (err) => {
                alert('Usuário ou senhas erradas.')
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
