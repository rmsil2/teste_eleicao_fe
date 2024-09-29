import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.page.html',
  styleUrls: ['./pessoa.page.scss'],
})
export class PessoaPage implements OnInit {

  constructor() { }

  signupUser() {
      console.log("enviou o form");
  }

  ngOnInit() {
  }

  
}
