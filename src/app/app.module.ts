import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CategoriaPessoaService } from '../services/domain/categoriapessoa.service';
import { ErrorInterceptorProvider } from '../interceptors/error-interceptor';
import { AuthService } from '../services/auth.service';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

/*import { LoginPageRoutingModule } from './login/login-routing.module';
import { LoginPageModule } from './login/login.module';*/

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, CategoriaPessoaService, ErrorInterceptorProvider, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
