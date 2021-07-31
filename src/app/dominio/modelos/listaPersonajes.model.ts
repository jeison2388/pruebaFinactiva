import { PersonajeModel } from "./personaje.model";

export class ListaPersonajeModel {
    private _listaPersonajes: PersonajeModel[];   
    private _totalRegistros: number;
    
    constructor(){
        this._listaPersonajes = []
        this._totalRegistros = 0
    }

    public get listaPersonajes(): PersonajeModel[] {
        return this._listaPersonajes;
    }
    public set listaPersonajes(value: PersonajeModel[]) {
        this._listaPersonajes = value;
    }
    public get totalRegistros(): number {
        return this._totalRegistros;
    }
    public set totalRegistros(value: number) {
        this._totalRegistros = value;
    }

}