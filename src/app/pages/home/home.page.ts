import { Component, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    public appPages = [
        { title: 'Pessoas', url: 'folder/Pessoas', icon: 'home' },
        { title: 'Demandas', url: 'folder/Demandas', icon: 'paper-plane' },
        { title: 'Atividades', url: 'folder/Atividades', icon: 'heart' },
        { title: 'Archived', url: 'folder/archived', icon: 'archive' },
        { title: 'Trash', url: 'folder/trash', icon: 'trash' },
        { title: 'Spam', url: 'folder/spam', icon: 'warning' },
    ];
    public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
    constructor(private pLocation: PlatformLocation) {
        history.pushState(null, '', location.href);
        this.pLocation.onPopState(() => { history.pushState(null, '', location.href) });
    }

   ngOnInit() {
  }

}
