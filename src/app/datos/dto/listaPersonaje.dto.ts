import { PersonajeDto } from "./personaje.dto";

export interface ListaPersonajeDto{
    total: number
    results: PersonajeDto[]
}