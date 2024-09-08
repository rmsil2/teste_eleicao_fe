import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { CredenciaisDTO } from '../../models/credenciais.dto';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    creds: CredenciaisDTO = {
        nome: "",
        senha: ""
        }

    constructor(public nav: NavController,
        private menu: MenuController,
        public auth: AuthService) {
        this.menu.enable(false);
    }

    abrirHome() {
        this.auth.authenticate(this.creds)
            .subscribe(response => {
                //console.log(response.headers.get('Authorization'));
                this.auth.successfulLogin(response.headers.get('Authorization'));
                this.nav.navigateForward('home'); this.menu.enable(true); 
            },
            error => { }
        )

    }

  fechaMenu() {
      this.menu.enable(false); 
  }

  ngOnInit() {
 
  }

}
