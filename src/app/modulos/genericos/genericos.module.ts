import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscadorPersonajesComponent } from './buscador-personajes/buscador-personajes.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    BuscadorPersonajesComponent
  ],
  exports: [BuscadorPersonajesComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class GenericosModule { }
