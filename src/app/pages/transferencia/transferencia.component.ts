import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Transferencia } from 'src/app/models/transferencias.model';
import { TransferenciaService } from 'src/app/services/transferencia.service';

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
  constructor(private service: TransferenciaService, private route: Router) { }

  ngOnInit(): void {
  }

  transferir() {
    console.log('Transferencia realizada!');
    //console.log(`valor = ${this.valor}` + `destino = ${this.destino}`);
    const valor: Transferencia = { valor: this.valor, destino: this.destino }
    //this.aoTransferir.emit(valor)

    this.service.adicionar(valor)
      .subscribe(resultado => {
        console.log(resultado);
        this.route.navigateByUrl('extrato')
      },
        (error) => console.error(error));
  }

}
