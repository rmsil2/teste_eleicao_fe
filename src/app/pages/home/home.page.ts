import { Component, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { StorageService } from '../../../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    nome: string;

    constructor(private pLocation: PlatformLocation, public storage: StorageService) {
        history.pushState(null, '', location.href);
        this.pLocation.onPopState(() => { history.pushState(null, '', location.href) });
    }

    ionViewDidEnter() {
        let localUser = this.storage.getLocalUser();
        if (localUser && localUser.nome) {
            this.nome = localUser.nome;
        }
    }

   ngOnInit() {
  }

}
