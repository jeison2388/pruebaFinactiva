import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPersonajesComponent } from './lista-personajes/lista-personajes.component';
import { RouterModule } from '@angular/router';
import { GenericosModule } from '../genericos/genericos.module';
import { TarjetaPersonajeComponent } from './tarjeta-personaje/tarjeta-personaje.component';
import {MatCardModule} from '@angular/material/card';

export const routes = [
  { path: '', component: ListaPersonajesComponent },
];

@NgModule({
  declarations: [ListaPersonajesComponent, TarjetaPersonajeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GenericosModule,
    MatCardModule
    
  ]
})
export class ComicsModule { }
