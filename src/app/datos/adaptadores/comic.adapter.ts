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

    static listDtoToModel(listaDto: ComicDto[]) : ComicModel[] {
        let listaComics : ComicModel[] = []
        listaDto.forEach(comic=>{
            listaComics.push(this.toModel(comic))
        })
        return listaComics;
    }

    static toModel(comicDto: ComicDto): ComicModel{
        let comic =  new ComicModel()
        comic.id = comicDto.id
        comic.nombre = comicDto.title
        comic.descripcion = comicDto.description ?  comicDto.description.length > 280 ? comicDto.description.slice(0,280) : comicDto.description : ''
        comic.imagen = comicDto.thumbnail.path + '/portrait_uncanny.'+ comicDto.thumbnail.extension
        comic.precio = comicDto.prices[0].price
        return comic
    }
}