import { ImagenDto } from "./imagen.dto";

export interface ComicDto{
    id : number
    images: ImagenDto[]
    title: String
    description: String
    precio : number
    resourceURI : string
    name: String
}