export class ComicModel {
    private _urlConsulta!: String;
    private _nombre!: String;


   
    
    public get urlConsulta(): String {
        return this._urlConsulta;
    }
    public set urlConsulta(value: String) {
        this._urlConsulta = value;
    }
    public get nombre(): String {
        return this._nombre;
    }
    public set nombre(value: String) {
        this._nombre = value;
    }
    
}