import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

    public appPages = [
        { title: 'Home', url: 'home', icon: 'home' },
        { title: 'Categoria Pessoa', url: 'categoria-pessoa', icon: 'build' },
        { title: 'Categoria Atividade', url: 'folder/Demandas', icon: 'paper-plane' },
        { title: 'Demandas', url: 'folder/archived', icon: 'archive' },
        { title: 'Atividade', url: 'folder/trash', icon: 'trash' },
        { title: 'Atenção', url: 'login', icon: 'warning' },
    ];

    public appPages2 = [
        { title: 'Pessoas', icon: 'heart', component: '' },
        { title: 'Usuarios', icon: 'log-in', component: ''},
        { title: 'Sair', icon: 'log-out', component: '' }
    ];

    public labels = ['Logout', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

    constructor(public authService: AuthService, public nav: NavController, private menu: MenuController) { }

    openPage(page: { title: string, component: string } ) {
        switch (page.title) {
            case 'Sair':
                this.authService.logout();
                this.menu.enable(false);
                this.nav.navigateForward('login'); 
                break;

            case 'Usuarios':
                this.nav.navigateForward('usuario');
                break;

            case 'Pessoas':
                this.nav.navigateForward('pessoa');
                break;

            default:
                break;
        }
    }
}
