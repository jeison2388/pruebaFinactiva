import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ComicModel } from 'src/app/dominio/modelos/comic.model';
import { ListaPersonajeModel } from 'src/app/dominio/modelos/listaPersonajes.model';
import { environment } from 'src/environments/environment';
import { ComicAdapter } from '../adaptadores/comic.adapter';
import { PersonajeAdapter } from '../adaptadores/personaje.adapter';
import { ComicDto } from '../dto/comic.dto';
import { ListaComicDto } from '../dto/listaComic.dto';
import { ListaPersonajeDto } from '../dto/listaPersonaje.dto';
import { API_KEY, BUSQUEDA_INICIA_CON, CANTIDAD_REGISTROS, COMPLEMENTO_COMICS_PERSONAJE, PAGINA_SOLICITADA, SERVICIO_COMICS, SERVICIO_COMICS_PERSONAJE, SERVICIO_PERSONAJES } from './nombreServicios';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  observadorBusquedaPersonajes: Subject<string> = new Subject<string>();

  constructor(public http: HttpClient) { }

  getPersonajes(numeroPagina: number): Observable<ListaPersonajeModel>{
    let url = environment.urlBase + SERVICIO_PERSONAJES + CANTIDAD_REGISTROS + PAGINA_SOLICITADA + `${numeroPagina}&` + API_KEY + environment.apiKey
    return new Observable(observador =>{
      this.http.get<ListaPersonajeDto>(url).subscribe(respuesta =>{
        let listaPersonaje: ListaPersonajeModel = PersonajeAdapter.listDtoToModel(respuesta)
        observador.next(listaPersonaje)
      })
    })
  }

  getPersonajesBuscador(numeroPagina:number, cadenaBusqueda:String): Observable<ListaPersonajeModel>{
    let url = environment.urlBase + SERVICIO_PERSONAJES + BUSQUEDA_INICIA_CON + `${cadenaBusqueda}&`  + CANTIDAD_REGISTROS + PAGINA_SOLICITADA + `${numeroPagina}&` + API_KEY + environment.apiKey
    return new Observable(observador =>{
      this.http.get<ListaPersonajeDto>(url).subscribe(respuesta =>{
        let listaPersonaje: ListaPersonajeModel = PersonajeAdapter.listDtoToModel(respuesta)
        observador.next(listaPersonaje)
      })
    })
  }

  getComicDesdeUrl(urlComic:String): Observable<ComicModel>{
    let vectorUrl = urlComic.split('comics/')
    let idComic : String = vectorUrl[1]
    let url = environment.urlBase + SERVICIO_COMICS + idComic +`?${API_KEY}${environment.apiKey}`
    return new Observable(observador =>{
      this.http.get<ListaComicDto>(url).subscribe(respuesta =>{
        let comic: ComicModel = ComicAdapter.toModel(respuesta.data.results[0])
        observador.next(comic)
      })
    })
  }

  getTodosComicsPersonajeDesdeUrl(urlComic:String): Observable<ComicModel[]>{
    let vectorUrl = urlComic.split(SERVICIO_COMICS_PERSONAJE)
    console.log(vectorUrl)
    let idPersonaje : String = vectorUrl[1]
    let url = environment.urlBase + SERVICIO_COMICS_PERSONAJE + idPersonaje + `?${API_KEY}${environment.apiKey}`
    return new Observable(observador =>{
      this.http.get<ListaComicDto>(url).subscribe(respuesta =>{
        let listaComics: ComicModel[] = ComicAdapter.listDtoToModel(respuesta.data.results)
        observador.next(listaComics)
      })
    })
  }
}
