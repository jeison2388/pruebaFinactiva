import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MarvelService } from 'src/app/datos/api/marvel.service';
import { ComicModel } from 'src/app/dominio/modelos/comic.model';
import { ComicsModule } from '../comics.module';

@Component({
  selector: 'app-lista-comics',
  templateUrl: './lista-comics.component.html',
  styleUrls: ['./lista-comics.component.scss']
})
export class ListaComicsComponent implements OnInit {

  listaComicsVisualizar: ComicModel[]

  constructor(private servicioMarvel: MarvelService, @Inject(MAT_DIALOG_DATA) public datosRecibidos: {urlListaComics:String}) { 
    this.listaComicsVisualizar = []
  }

  ngOnInit(): void {
    this.verMasComicsRelacionado(this.datosRecibidos.urlListaComics)
  }

  verMasComicsRelacionado(urlComic: String) {
    this.servicioMarvel.getTodosComicsPersonajeDesdeUrl(urlComic).subscribe(respuesta =>{
        this.listaComicsVisualizar = respuesta
    })
  }

}
