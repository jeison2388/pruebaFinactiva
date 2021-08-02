import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MarvelService } from 'src/app/datos/api/marvel.service';
import { ComicModel } from 'src/app/dominio/modelos/comic.model';
import { PersonajeModel } from 'src/app/dominio/modelos/personaje.model';
import { ListaComicsComponent } from '../lista-comics/lista-comics.component';
import { TarjetaComicComponent } from '../tarjeta-comic/tarjeta-comic.component';

@Component({
  selector: 'app-tarjeta-personaje',
  templateUrl: './tarjeta-personaje.component.html',
  styleUrls: ['./tarjeta-personaje.component.scss']
})
export class TarjetaPersonajeComponent implements OnInit {

  @Input() personaje!: PersonajeModel;
  miniListaComicsRelacionado: ComicModel[]
  constructor(public ventanaModal: MatDialog, private servicioMarvel: MarvelService) { 
    this.miniListaComicsRelacionado = []
  }

  ngOnInit(): void {
    this.personaje.listaComics.length > 3 ? 
      this.miniListaComicsRelacionado = this.personaje.listaComics.slice(0,3) : 
      this.miniListaComicsRelacionado = this.personaje.listaComics
  }

  verListaCompletaComics(urlListaComics: String){
    const dialogRef = this.ventanaModal.open(ListaComicsComponent, {
      data: {
        urlListaComics: urlListaComics
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  verComic(urlComic: String){
    this.servicioMarvel.getComicDesdeUrl(urlComic).subscribe(respuesta =>{
      this.verDetalleComic(respuesta)
    })
  }

  verDetalleComic(comicMostrar: ComicModel){
    const dialogRef = this.ventanaModal.open(TarjetaComicComponent, {
      data: comicMostrar
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

 

}
