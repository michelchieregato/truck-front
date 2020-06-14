import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component"
import { PasswordRecoveryComponent } from "./password-recovery/password-recovery.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { HomeComponent } from "./home/home.component";
import { SurroundingsComponent } from './surroundings/surroundings.component';
import { LocationsListComponent } from './locations-list/locations-list.component';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { ListSavedPathsComponent } from './list-saved-paths/list-saved-paths.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/token.interceptor';


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule,
        AppRoutingModule,
        AppRoutingModule,
        NativeScriptHttpClientModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        PasswordRecoveryComponent,
        SignUpComponent,
        HomeComponent,
        SurroundingsComponent,
        LocationsListComponent,
        CreateTripComponent,
        ListSavedPathsComponent
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
