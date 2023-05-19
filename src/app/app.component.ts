import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    nome = 'Fábio Araujo Gauna';
    dataAniversario = new Date(1985, 11, 28);
    preco = 12855.32;
    troco = 0.57392;

}
