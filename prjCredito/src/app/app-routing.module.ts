
import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import {  PrjRouters } from './prj';

export const rotas = [
  {path:'index', pathMatch:'full',redirectTo:'localhost:4200'},
  ... PrjRouters
];

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forRoot(rotas)
  ],
  exports:[
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule { }
