import { Component, Input, OnInit } from '@angular/core';
import { ComicModel } from 'src/app/dominio/modelos/comic.model';

@Component({
  selector: 'app-tarjeta-comic-favorito',
  templateUrl: './tarjeta-comic-favorito.component.html',
  styleUrls: ['./tarjeta-comic-favorito.component.scss']
})
export class TarjetaComicFavoritoComponent implements OnInit {

  @Input() comic!: ComicModel;

  constructor() { }

  ngOnInit(): void {
  }

}
