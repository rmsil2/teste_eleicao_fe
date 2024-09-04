import { Component, OnInit } from '@angular/core';
import { CategoriaPessoaService } from '../../../services/domain/categoriapessoa.service';

@Component({
  selector: 'app-categoria-pessoa',
  templateUrl: './categoria-pessoa.page.html',
  styleUrls: ['./categoria-pessoa.page.scss'],
})
export class CategoriaPessoaPage implements OnInit {

  constructor(public categoriaPessoaService: CategoriaPessoaService) { }

  ionViewDidLoad() {
      this.categoriaPessoaService.findAll()
          .subscribe(response => {
              console.log(response);
          },
          error => {
              console.log(error)
          });
  }

  ngOnInit() {
  }

}
