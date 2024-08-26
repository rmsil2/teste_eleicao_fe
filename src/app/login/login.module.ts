import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
/*import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router'; */

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  declarations: [LoginPage]
})
/*
@NgModule({
    declarations: [LoginPage],
    imports: [BrowserModule, IonicModule.forRoot(), LoginPageRoutingModule],
    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
    bootstrap: [LoginPage],
})
*/
export class LoginPageModule {}
