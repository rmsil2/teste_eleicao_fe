import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("Passou no interceptor");
 //       return next.handle(req).pipe(catchError(err => {
 //           const error = err.error.message || err.statusText;
 //           return throwError(error);
        return next.handle(req).pipe(catchError(err => {
            let errorObj = err;
            if (errorObj.error) {
                errorObj = errorObj.error;
            }
            if (!errorObj.status) {
                errorObj = JSON.parse(errorObj);
            }

            console.log("Erro detectado pelo interceptor:");
            console.log(errorObj);

            return throwError(errorObj);
        }))
    }
   // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   //     console.log("Passou no interceptor");
   //     return next.handle(req)
     
   // }
}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};