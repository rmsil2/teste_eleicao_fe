import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaPessoaPage } from './categoria-pessoa.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriaPessoaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriaPessoaPageRoutingModule {}
