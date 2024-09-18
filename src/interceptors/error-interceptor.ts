import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { StorageService } from '../services/storage.service';
import { AlertController } from '@ionic/angular';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(public storage: StorageService, public alertCtrl: AlertController) { }

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

                case 401:
                    this.handle401();
                    break;

                case 403:
                    this.handle403();
                    break;

                default:
                    this.handleDefaultError(errorObj);
                    break;

            }

            return throwError(errorObj);
        }))
    }
 
    handle403() {
        this.storage.setLocalUser(null);
    }

    async  handle401() {
        const alert = await this.alertCtrl.create({
            header: 'Erro 401',
            subHeader: 'Falha na Autenticacao',
            message: 'login ou senha invalidos.',
            buttons: ['OK']
        });

        await alert.present();
    }

    async handleDefaultError(errorObj: any) {
        const alert = await this.alertCtrl.create({
            header: 'Erro ' + errorObj.status,
            subHeader: 'Falha: ' + errorObj.error,
            message: errorObj.message,
            buttons: ['OK']
        });

        await alert.present();
    }
}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};