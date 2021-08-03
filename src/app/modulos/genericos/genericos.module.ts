import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscadorPersonajesComponent } from './buscador-personajes/buscador-personajes.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BuscadorPersonajesComponent
  ],
  exports: [BuscadorPersonajesComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
  ]
})
export class GenericosModule { }
