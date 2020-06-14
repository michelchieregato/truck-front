import {Component} from "@angular/core";
import {Router} from '@angular/router';
import {UserService} from "~/app/services/user.service";
import {alert} from "tns-core-modules/ui/dialogs";

@Component({
    selector: 'sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['../login/login.component.scss'],
    moduleId: module.id
})

export class SignUpComponent {
    constructor(private router: Router, private userService: UserService) {
    }

    email = '';
    password = '';
    name = '';
    phoneNumber = '';
    confirmPassword = '';
    isNewUser = false;
    sending = false;

    submitUserInfo() {
        this.sending = true;

        if (this.password !== this.confirmPassword) {
            alert('As senhas não são iguais');
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
                alert('Usuário criado com sucesso! Já pode fazer login');
                this.navigateToLogin();
                this.sending = false;
            },
            (err) => {
                alert('Não foi possível fazer a autenticação, verifique se os campos estão corretos.');
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
