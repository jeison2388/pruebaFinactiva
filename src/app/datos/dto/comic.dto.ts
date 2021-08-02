import { ImagenDto } from "./imagen.dto";

export interface ComicDto{
    id : number
    thumbnail: ImagenDto
    title: String
    description: String
    prices : {
        type:String,
        price:number
    }[]
    resourceURI : string
    name: String
}