import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrjService {

  private valorInicial:number;

  constructor() { }
   //vai descontar sempre um
  descontar(valor1:number):number{
    return valor1 - 1 ;
  }
  saldo(valor1:number,valor2:number):number{
    return valor1 + valor2;
  }
  saque(valor1:number,valor2:number):number{
    return valor1 - valor2;
  }
}
