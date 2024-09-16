import { Component, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { StorageService } from '../../../services/storage.service';
import { UsuarioDTO } from '../../../models/usuario.dto';
import { UsuarioService } from '../../../services/domain/usuario.service';
import { API_CONFIG } from '../../../config/api.config';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    //nome: string;
    usuario: UsuarioDTO;

    constructor(private pLocation: PlatformLocation, public storage: StorageService, public usuarioService: UsuarioService, public navCtrl: NavController) {
        history.pushState(null, '', location.href);
        this.pLocation.onPopState(() => { history.pushState(null, '', location.href) });
    }

    ionViewDidEnter() {
        let localUser = this.storage.getLocalUser();
        if (localUser && localUser.nome) {
            //this.nome = localUser.nome;
            this.usuarioService.findByNome(localUser.nome)
                .subscribe(response => {
                    this.usuario = response;
                    this.getImageIfExists();
                },
                error => {
                    if (error.status == 403) {
                        this.navCtrl.navigateRoot('login');
                    }
                });
        }
       else {
            this.navCtrl.navigateRoot('login');
       }
    }

    getImageIfExists() {
        this.usuarioService.getImageFromDir(this.usuario.id)
            .subscribe(response => {
                this.usuario.imageURL = `${API_CONFIG.bucketBaseUrl}/cp${this.usuario.id}.png`;
            },
            error => { });
    }

   ngOnInit() {
  }

}
