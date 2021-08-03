import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { ComicModel } from 'src/app/dominio/modelos/comic.model';
import { LISTA_FAVORITOS } from './nombreServicios';

@Injectable({
  providedIn: 'root'
})
export class DbLocalService {

  listaComicsFavoritos: ComicModel[]

  constructor() { 
    this.listaComicsFavoritos = []
  }

  inicializarListaFavoritos(){
    if(this.existeListaFavoritos()){
      this.listaComicsFavoritos = this.getListaFavoritos()
    }else{
      this.crearListaFavoritos()
    }
  }

  crearListaFavoritos(){
    localStorage.setItem(LISTA_FAVORITOS, JSON.stringify(this.listaComicsFavoritos))
  }

  agregarComicAFavoritos(comicAgregar: ComicModel){
    this.listaComicsFavoritos.push(comicAgregar)
    this.actualizarListaFavoritos()
  }

  eliminarComicDeFavoritos(comicEliminar: ComicModel){
    let index = this.listaComicsFavoritos.indexOf( comicEliminar );
    this.listaComicsFavoritos.splice( index, 1 );
    this.actualizarListaFavoritos()
  }

  actualizarListaFavoritos(){
    localStorage.setItem(LISTA_FAVORITOS, JSON.stringify(this.listaComicsFavoritos))
  }

  existeListaFavoritos(){
    return localStorage.getItem(LISTA_FAVORITOS) == null ? false : true
  }

  getListaFavoritos():ComicModel[]{
    let lista : [] = (JSON.parse(localStorage.getItem(LISTA_FAVORITOS)!))
    let listaFavoritosRetorna: ComicModel[] = []
    for(let i = 0; i < lista.length ; i++) {
      let comic: ComicModel = new ComicModel()
      comic.descripcion = lista[i]['_descripcion']
      comic.id = lista[i]['_id']
      comic.imagen = lista[i]['_imagen']
      comic.nombre = lista[i]['_nombre']
      listaFavoritosRetorna.push(comic)
    }
   return listaFavoritosRetorna
  }

  existeComic(comicBuscar: ComicModel): boolean{
    return this.listaComicsFavoritos.find(comic => comic.id == comicBuscar.id) ? true : false
  }
}
