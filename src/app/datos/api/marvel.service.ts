import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListaPersonajeDto } from '../dto/listaPersonaje.dto';
import { API_KEY, CANTIDAD_REGISTROS, PAGINA_SOLICITADA, SERVICIO_PERSONAJES } from './nombreServicios';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(public http: HttpClient) { }

  getPersonajes(numeroPagina: number): Observable<ListaPersonajeDto>{
    let url = environment.urlBase + SERVICIO_PERSONAJES + CANTIDAD_REGISTROS + PAGINA_SOLICITADA + `${numeroPagina}&` + API_KEY + environment.apiKey
   
    return new Observable(observador =>{
      this.http.get<ListaPersonajeDto>(url).subscribe(respuesta =>{
        console.log(respuesta.data)
      })
    })
  }
}
