import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MarvelService } from 'src/app/datos/api/marvel.service';

@Component({
  selector: 'app-lista-comics',
  templateUrl: './lista-comics.component.html',
  styleUrls: ['./lista-comics.component.scss']
})
export class ListaComicsComponent implements OnInit {

  constructor(private servicioMarvel: MarvelService, @Inject(MAT_DIALOG_DATA) public datosRecibidos: {urlListaComics:String}) { }

  ngOnInit(): void {
    this.verMasComicsRelacionado(this.datosRecibidos.urlListaComics)
  }

  verMasComicsRelacionado(urlComic: String) {
    this.servicioMarvel.getTodosComicsPersonajeDesdeUrl(urlComic).subscribe(respuesta =>{
      
    })
  }

}
