import { ComicDto } from "./comic.dto";
import { ImagenDto } from "./imagen.dto";

export interface PersonajeDto{
    id: number
    name: String
    description: String
    comics: {
        collectionURI: String
        items: ComicDto[]
    }
    thumbnail: ImagenDto
}