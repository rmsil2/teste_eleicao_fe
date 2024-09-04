import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaPessoaPageRoutingModule } from './categoria-pessoa-routing.module';

import { CategoriaPessoaPage } from './categoria-pessoa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriaPessoaPageRoutingModule
  ],
  declarations: [CategoriaPessoaPage]
})
export class CategoriaPessoaPageModule {}
