import { ComicDto } from "./comic.dto";

export interface ListaComicDto{
    data:{
        results: ComicDto[]
        total: number
    }
}