import { ListaPersonajeModel } from "src/app/dominio/modelos/listaPersonajes.model";
import { PersonajeModel } from "src/app/dominio/modelos/personaje.model";
import { ListaPersonajeDto } from "../dto/listaPersonaje.dto";
import { PersonajeDto } from "../dto/personaje.dto";

export class PersonajeAdapter{
    static toModel(personajeDto: PersonajeDto): PersonajeModel {
        // queda pendiente transformacion de comics         
        return new PersonajeModel(personajeDto.id, personajeDto.name, personajeDto.description, [], personajeDto.thumbnail.path);
    }

    static listDtoToModel(listaDto: ListaPersonajeDto) : ListaPersonajeModel{
        let listaPersonajes = new ListaPersonajeModel();
        listaPersonajes.totalRegistros = listaDto.total
        listaPersonajes.listaPersonajes = []
        listaDto.data.results.forEach(personaje =>{
            listaPersonajes.listaPersonajes.push(this.toModel(personaje))
        })
        return listaPersonajes;
    }

}