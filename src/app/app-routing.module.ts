import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
    /*path: '',
    redirectTo: 'folder/Pessoas',
    pathMatch: 'full'*/
     path: '',
    redirectTo: 'login',
    pathMatch: 'full'

  },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)},
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  { path: 'folder/:id', loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule) },
  { path: 'categoria-pessoa', loadChildren: () => import('./pages/categoria-pessoa/categoria-pessoa.module').then( m => m.CategoriaPessoaPageModule)}
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
