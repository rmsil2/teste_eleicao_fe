import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { StorageService } from '../services/storage.service';
//import { AlertController } from '@ionic/angular';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(public storage: StorageService/*, public alertController: AlertController*/) { }

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

            switch (errorObj.status) {

/*                case 401:
                    this.handle401();
                    break;
*/
                case 403:
                    this.handle403();
                    break;

            }

            return throwError(errorObj);
        }))
    }
 
    handle403() {
        this.storage.setLocalUser(null);
    }
/*
    handle401() {
        let alert = this.alertController.create({
            title: 'Erro 401 - falha na autenticação',
            message: 'Nome ou password incorretos',
            enableBackdropDismiss: false,
            buttons: [
                { text: 'OK' }
            ]
        });
        alert.present();
    }
    */
}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};