import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'bytebank';
  valor: number;
  destino: number;

  transferir($event) {
    console.log($event);
    this.destino = $event.destino;
    this.valor = $event.valor;
  }
}