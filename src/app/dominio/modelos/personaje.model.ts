import { ComicModel } from "./comic.model";

export class PersonajeModel{
    private _id: number;
    private _nombre: String;
    private _descripcion: String;
    private _listaComics: ComicModel[];
    private _imagen: String;
    private _urlConsultaComics: String;
    
   
    constructor(_id: number, _nombre: String, _descripcion: String, _listaComics: ComicModel[], _imagen: String, _urlConsultaComics: String){
        this._id = _id
        this._nombre = _nombre
        this._descripcion = _descripcion
        this._listaComics = _listaComics
        this._imagen = _imagen
        this._urlConsultaComics = _urlConsultaComics
    }
    
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get nombre(): String {
        return this._nombre;
    }
    public set nombre(value: String) {
        this._nombre = value;
    }
    public get descripcion(): String {
        return this._descripcion;
    }
    public set descripcion(value: String) {
        this._descripcion = value;
    }
    public get listaComics(): ComicModel[] {
        return this._listaComics;
    }
    public set listaComics(value: ComicModel[]) {
        this._listaComics = value;
    }
    public get imagen(): String {
        return this._imagen;
    }
    public set imagen(value: String) {
        this._imagen = value;
    }
    public get urlConsultaComics(): String {
        return this._urlConsultaComics;
    }
    public set urlConsultaComics(value: String) {
        this._urlConsultaComics = value;
    }
}