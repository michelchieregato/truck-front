import { Component } from "@angular/core";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    moduleId: module.id
})

export class LoginComponent {
    email = '';
    password = '';
    name = '';
    phoneNumber = '';
    confirmPassword = '';
    isNewUser = true;

    submitUserInfo() {
        console.log('clickando!!')
    }
}
