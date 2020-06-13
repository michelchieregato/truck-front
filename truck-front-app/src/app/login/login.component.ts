import { Component } from "@angular/core";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    // styleUrls: ['./login.component.scss'],
    moduleId: module.id
})

export class LoginComponent {
    email = '';
    password = '';
    isNewUser = false;

    submitUserInfo() {
        console.log('clickando!!')
    }
}
