import { ComicModel } from "src/app/dominio/modelos/comic.model";
import { ComicDto } from "../dto/comic.dto";

export class ComicAdapter {

    static toModelBasic(comicDto: ComicDto): ComicModel{
        let comicBasico =  new ComicModel()
        comicBasico.nombre = comicDto.name[0] + (comicDto.name.length > 25 ? comicDto.name.slice(1,25)+'...' : comicDto.name.slice(1,comicDto.name.length))
        comicBasico.urlConsulta = comicDto.resourceURI
        return comicBasico
    }

    static listDtoToModelBasic(listaDto: ComicDto[]) : ComicModel[]{
        let listaComics : ComicModel[] = []
        listaDto.forEach(comic =>{
            listaComics.push(this.toModelBasic(comic))
        })
        return listaComics
    }
}