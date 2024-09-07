import { Component, OnInit } from '@angular/core';
import { CategoriaPessoaService } from '../../../services/domain/categoriapessoa.service';
import { CategoriaPessoaDTO } from '../../../models/categoriapessoa.dto';
import { API_CONFIG } from '../../../config/api.config';

@Component({
  selector: 'app-categoria-pessoa',
  templateUrl: './categoria-pessoa.page.html',
  styleUrls: ['./categoria-pessoa.page.scss'],
})
export class CategoriaPessoaPage implements OnInit {

  bucketUrl: string = API_CONFIG.bucketBaseUrl;
  itens: CategoriaPessoaDTO[];

  constructor(public categoriaPessoaService: CategoriaPessoaService) {  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter CategoriaPessoaPage');
    this.categoriaPessoaService.findAll()
        .subscribe(response => {
            this.itens = response;
      },
      error => {});
  }



  ngOnInit() {
  }

}

