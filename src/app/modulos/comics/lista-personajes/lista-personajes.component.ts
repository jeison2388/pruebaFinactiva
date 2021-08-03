import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MarvelService } from 'src/app/datos/api/marvel.service';
import { ListaPersonajeModel } from 'src/app/dominio/modelos/listaPersonajes.model';
import { PersonajeModel } from 'src/app/dominio/modelos/personaje.model';
import { MatPaginator } from '@angular/material/paginator';
import { DbLocalService } from 'src/app/datos/api/db-local.service.ts.service';
import { ComicModel } from 'src/app/dominio/modelos/comic.model';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.scss']
})
export class ListaPersonajesComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  listaDatos: ListaPersonajeModel
  paginaActual: number
  cantidadColumnas: number
  ordenComponentes: string
  alineacionComponentes: string
  tamFilas: string
  listaFavoritos: ComicModel[]
  estaUsandoBuscador: boolean
  cadenaBusqueda: String

  constructor(private servicioMarvel: MarvelService, private servicioDbLocal: DbLocalService) {
    this.listaDatos = new ListaPersonajeModel()
    this.paginaActual = 1
    this.cantidadColumnas = 2
    this.ordenComponentes = 'row'
    this.alineacionComponentes = 'space-evenly start'
    this.tamFilas = '450px'
    this.listaFavoritos = []
    this.estaUsandoBuscador = false
    this.cadenaBusqueda = ''
  }

  ngOnInit(): void {
    this.getPersonajes()
    this.servicioDbLocal.inicializarListaFavoritos();
    this.listaFavoritos = this.servicioDbLocal.listaComicsFavoritos

    this.servicioMarvel.observadorBusquedaPersonajes.subscribe(cadenaBusqueda => {
      cadenaBusqueda.length > 0 ? this.estaUsandoBuscador = true : this.estaUsandoBuscador = false
      this.cadenaBusqueda = cadenaBusqueda
      this.getPersonajes()
    })


  }

  getPersonajes() {
    if (this.estaUsandoBuscador) {
      this.servicioMarvel.getPersonajesBuscador(this.paginaActual, this.cadenaBusqueda).subscribe(result => {
        this.listaDatos = result
      })
    } else {
      this.servicioMarvel.getPersonajes(this.paginaActual).subscribe(result => {
        this.listaDatos = result
      })
    }
  }

  cambiarPagina(paginaNueva: number): void {
    this.paginaActual = paginaNueva
    this.getPersonajes()
  }

  reajustarGrid(event: any) {
    this.cantidadColumnas = (event.target.innerWidth <= 1280) ? 1 : 2;
    if (event.target.innerWidth <= 1280) {
      this.ordenComponentes = 'column'
      this.alineacionComponentes = 'space-between '
      this.tamFilas = '400px'
    } else {
      this.ordenComponentes = 'row'
      this.alineacionComponentes = 'space-evenly start'
      this.tamFilas = '450px'
    }
  }

  generarComicsFavoritosAleatoriamente() {
    let encontroComic = false
    let idComicAleatorio
    let comicsSeleccionado: ComicModel[] = []
    while (!encontroComic) {
      let personajeAleatorio = Math.floor(Math.random() * (this.listaDatos.listaPersonajes.length));
      let comicAleatorio = Math.floor(Math.random() * (this.listaDatos.listaPersonajes[personajeAleatorio].listaComics.length));
      
      if (this.listaDatos.listaPersonajes[personajeAleatorio].listaComics[comicAleatorio].urlConsulta != undefined) {
        let urlConsulta = this.listaDatos.listaPersonajes[personajeAleatorio].listaComics[comicAleatorio].urlConsulta
        idComicAleatorio = parseInt(urlConsulta.split('/comics/')[1])
        let comicAux : ComicModel = new ComicModel()
        comicAux.id = idComicAleatorio
        comicAux.urlConsulta = urlConsulta
        if(!this.servicioDbLocal.existeComic(comicAux)) {
          comicsSeleccionado.push(comicAux)
          comicsSeleccionado.length > 2 ? encontroComic = true : encontroComic = false
        }else {
          encontroComic = false
        }
      } else {
        encontroComic = false
      }
    }
    this.agregarComicsAleatoriosListaFavoritos(comicsSeleccionado)
  }

  agregarComicsAleatoriosListaFavoritos(listaComicsAleatorios: ComicModel[]){
    for(let i = 0; i < listaComicsAleatorios.length; i++) {
      this.servicioMarvel.getComicDesdeUrl(listaComicsAleatorios[i].urlConsulta).subscribe(comicAgregar =>{
        this.servicioDbLocal.agregarComicAFavoritos(comicAgregar)
      })
    }
  }

}
