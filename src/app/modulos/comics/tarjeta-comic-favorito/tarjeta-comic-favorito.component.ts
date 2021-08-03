import { Component, Input, OnInit } from '@angular/core';
import { DbLocalService } from 'src/app/datos/api/db-local.service.ts.service';
import { ComicModel } from 'src/app/dominio/modelos/comic.model';

@Component({
  selector: 'app-tarjeta-comic-favorito',
  templateUrl: './tarjeta-comic-favorito.component.html',
  styleUrls: ['./tarjeta-comic-favorito.component.scss']
})
export class TarjetaComicFavoritoComponent implements OnInit {

  @Input() comic!: ComicModel;

  constructor(private servicioDbLocal: DbLocalService) { }

  ngOnInit(): void {
  }

  eliminarComicDeFavoritos(){
    this.servicioDbLocal.eliminarComicDeFavoritos(this.comic)
  }

}
