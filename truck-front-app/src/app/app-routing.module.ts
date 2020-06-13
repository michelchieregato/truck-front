import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { LoginComponent } from "./login/login.component"
import { PasswordRecoveryComponent } from "./password-recovery/password-recovery.component"
import { SignUpComponent } from "./sign-up/sign-up.component"
import {SurroundingsComponent} from "~/app/surroundings/surroundings.component";
import { HomeComponent } from "./home/home.component"

const routes: Routes = [
    { path: "", redirectTo: "/surrounding", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "password-recovery", component: PasswordRecoveryComponent },
    { path: "sign-up", component: SignUpComponent },
    { path: "home", component: HomeComponent },
    {path: 'surrounding', component: SurroundingsComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
