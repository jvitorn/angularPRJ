import { Component, OnInit } from '@angular/core';
import { PrjService } from '../../services';

@Component({
  selector: 'app-credito',
  templateUrl: './credito.component.html',
  styleUrls: ['./credito.component.css']
})
export class CreditoComponent implements OnInit {

  private valorInicial:number;

  constructor( private descontar:PrjService , private saldo:PrjService , private saque:PrjService ) { }

  ngOnInit(): void {

    this.valorInicial = 10;

  }
  deposito(valorInserido:number){
    this.valorInicial = this.saldo.saldo(this.valorInicial,valorInserido);
  }
  desconto(valorInserido:number){
    this.valorInicial = this.descontar.descontar(this.valorInicial);
  }
  sacar(valorInserido:number){
    this.valorInicial = this.saque.saque(this.valorInicial,valorInserido);
  }

  get capturaValor(){
    return this.valorInicial;
  }

}
