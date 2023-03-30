import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.scss']
})
export class TransferenciaComponent implements OnInit {
  title2 = 'Nova Transferencia';

  @Output() aoTransferir = new EventEmitter<any>();
  valor: number;
  destino: number;
  constructor() { }

  ngOnInit(): void {
  }

  transferir() {
    console.log('Transferencia realizada!');
    //console.log(`valor = ${this.valor}` + `destino = ${this.destino}`);
    const valor = { valor: this.valor, destino: this.destino }
    this.aoTransferir.emit(valor)
  }

}
