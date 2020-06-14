import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {UserService} from "~/app/services/user.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private userService: UserService) {
    }

    /**
     * Add Authorization header to all http requests and handle the case where the user is unauthorized.
     * It automatically adds the user token, present in the user model, inside UserService.
     * @param req Http request
     * @param next Error handler in case user is unauthorized.
     */
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        let modifiedRequest;
        let token = '';
        this.userService.currentUser.subscribe(
            currentUser => {
                if (currentUser) {
                    token = currentUser.token;
                }
            }
        );
        modifiedRequest = req.clone({
            headers: req.headers.append('Authorization', 'Token ' + token)
        });
        return next.handle(modifiedRequest);
    }
}
