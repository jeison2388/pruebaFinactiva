export class ComicModel {
    private _urlConsulta!: String;
    private _nombre!: String;
    private _descripcion!: String;
    private _imagen!: String;
    private _precio!: number;
    private _id!: number;

    
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
    public get descripcion(): String {
        return this._descripcion;
    }
    public set descripcion(value: String) {
        this._descripcion = value;
    }
    public get imagen(): String {
        return this._imagen;
    }
    public set imagen(value: String) {
        this._imagen = value;
    }
    public get precio(): number {
        return this._precio;
    }
    public set precio(value: number) {
        this._precio = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
}