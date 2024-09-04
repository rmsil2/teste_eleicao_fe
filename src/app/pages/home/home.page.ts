import { Component, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    constructor(private pLocation: PlatformLocation) {
        history.pushState(null, '', location.href);
        this.pLocation.onPopState(() => { history.pushState(null, '', location.href) });
    }

   ngOnInit() {
  }

}
