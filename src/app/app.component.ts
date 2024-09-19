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
        { title: 'Demandas', url: 'folder/Demandas', icon: 'paper-plane' },
        { title: 'Atividades', url: 'folder/Atividades', icon: 'heart' },
        { title: 'Archived', url: 'folder/archived', icon: 'archive' },
        { title: 'Trash', url: 'folder/trash', icon: 'trash' },
        { title: 'Atenção', url: 'login', icon: 'warning' },
    ];

    public appPages2 = [
        { title: 'Sair', icon: 'log-out', component: '' },
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

            default:
                break;
        }
    }
}
