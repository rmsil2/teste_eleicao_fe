import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
/*import { Component } from '@angular/core';*/

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    constructor(public nav: NavController, private menu: MenuController) { this.menu.enable(false); }
    abrirHome() {
        this.nav.navigateForward('home'); this.menu.enable(true); 
    }
  fechaMenu() {
      this.menu.enable(false); 
  }

  ngOnInit() {
 
  }

}
