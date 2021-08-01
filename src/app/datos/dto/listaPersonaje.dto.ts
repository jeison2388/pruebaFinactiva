import { PersonajeDto } from "./personaje.dto";

export interface ListaPersonajeDto{
    data:{
        results: PersonajeDto[]
        total: number
    }
}