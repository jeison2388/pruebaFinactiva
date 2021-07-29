import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPersonajesComponent } from './lista-personajes/lista-personajes.component';
import { RouterModule } from '@angular/router';
import { GenericosModule } from '../genericos/genericos.module';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

export const routes = [
  { path: '', component: ListaPersonajesComponent },
];

@NgModule({
  declarations: [ListaPersonajesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GenericosModule,
    
  ]
})
export class ComicsModule { }
