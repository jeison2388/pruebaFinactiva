import { ListaPersonajeModel } from "src/app/dominio/modelos/listaPersonajes.model";
import { PersonajeModel } from "src/app/dominio/modelos/personaje.model";
import { ListaPersonajeDto } from "../dto/listaPersonaje.dto";
import { PersonajeDto } from "../dto/personaje.dto";
import { ComicAdapter } from "./comic.adapter";

export class PersonajeAdapter{
    static toModel(personajeDto: PersonajeDto): PersonajeModel {       
        return new PersonajeModel(personajeDto.id, 
            personajeDto.name, 
            personajeDto.description, 
            ComicAdapter.listDtoToModelBasic(personajeDto.comics.items),
            personajeDto.thumbnail.path + '/standard_xlarge.' + personajeDto.thumbnail.extension);
    }

    static listDtoToModel(listaDto: ListaPersonajeDto) : ListaPersonajeModel{
        let listaPersonajes = new ListaPersonajeModel();
        listaPersonajes.totalRegistros = listaDto.data.total
        listaPersonajes.listaPersonajes = []
        listaDto.data.results.forEach(personaje =>{
            listaPersonajes.listaPersonajes.push(this.toModel(personaje))
        })
        return listaPersonajes;
    }
}