import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams, HttpResponse, HttpEvent } from '@angular/common/http';
import { AuthService } from './../../../services/core-services/authentication-services/auth.service'
import { exhaustMap, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
    constructor(private auth: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return this.auth.user.pipe(take(1), exhaustMap(user => {
            if (!user) {
                return next.handle(req)
            }
            const modifiedRequest = req.clone({
                params: new HttpParams().set('auth', user.token),
                setHeaders: {
                    // 'Content-Type': 'application/json',
                    // "Access-Control-Allow-Headers": "Content-Type",
                    // "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                    // "Access-Control-Allow-Origin": "*",
                    // 'Authorization': `Bearer ${AuthService.getToken()}`,
                }
            });
            return next.handle(modifiedRequest)
            // .pipe(
            //     tap(event => {
            //       if (event instanceof HttpResponse) {

            //         console.log(" all looks good");
            //         // http response status code
            //         console.log(event.status);
            //       }
            //     }, error => {
            //            // http response status code
            //           console.log("----response----");
            //           console.error("status code:");
            //           console.error(error.status);
            //           console.error(error.message);
            //           console.log("--- end of response---");

            //     })
            //   )

        }))
    }
}
