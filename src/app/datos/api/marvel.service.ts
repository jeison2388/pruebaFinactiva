import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaPersonajeModel } from 'src/app/dominio/modelos/listaPersonajes.model';
import { environment } from 'src/environments/environment';
import { PersonajeAdapter } from '../adaptadores/personaje.adapter';
import { ListaPersonajeDto } from '../dto/listaPersonaje.dto';
import { API_KEY, CANTIDAD_REGISTROS, PAGINA_SOLICITADA, SERVICIO_PERSONAJES } from './nombreServicios';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(public http: HttpClient) { }

  getPersonajes(numeroPagina: number): Observable<ListaPersonajeModel>{
    let url = environment.urlBase + SERVICIO_PERSONAJES + CANTIDAD_REGISTROS + PAGINA_SOLICITADA + `${numeroPagina}&` + API_KEY + environment.apiKey
   
    return new Observable(observador =>{
      this.http.get<ListaPersonajeDto>(url).subscribe(respuesta =>{
        let listaPersonaje: ListaPersonajeModel = PersonajeAdapter.listDtoToModel(respuesta)
        console.log(listaPersonaje)
      })
    })
  }
}
