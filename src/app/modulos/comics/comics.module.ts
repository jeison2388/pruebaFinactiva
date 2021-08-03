import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPersonajesComponent } from './lista-personajes/lista-personajes.component';
import { RouterModule } from '@angular/router';
import { GenericosModule } from '../genericos/genericos.module';
import { TarjetaPersonajeComponent } from './tarjeta-personaje/tarjeta-personaje.component';
import {MatCardModule} from '@angular/material/card';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ListaComicsComponent } from './lista-comics/lista-comics.component';
import {MatDialogModule} from '@angular/material/dialog';
import { TarjetaComicComponent } from './tarjeta-comic/tarjeta-comic.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {MatIconModule} from '@angular/material/icon';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import { TarjetaComicFavoritoComponent } from './tarjeta-comic-favorito/tarjeta-comic-favorito.component';

export const routes = [
  { path: '', component: ListaPersonajesComponent },
];

@NgModule({
  declarations: [ListaPersonajesComponent, TarjetaPersonajeComponent, ListaComicsComponent, TarjetaComicComponent, TarjetaComicFavoritoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GenericosModule,
    MatCardModule,
    MatGridListModule,
    NgxPaginationModule,
    FlexLayoutModule,
    MatDialogModule,
    IvyCarouselModule,
    MatIconModule,
    ScrollingModule,
    MatSnackBarModule,
    MatListModule
  ]
})
export class ComicsModule { }
