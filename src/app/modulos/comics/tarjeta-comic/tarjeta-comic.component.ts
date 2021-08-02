import { Component, Input, OnInit } from '@angular/core';
import { ComicModel } from 'src/app/dominio/modelos/comic.model';

@Component({
  selector: 'app-tarjeta-comic',
  templateUrl: './tarjeta-comic.component.html',
  styleUrls: ['./tarjeta-comic.component.scss']
})
export class TarjetaComicComponent implements OnInit {

  @Input() comic!: ComicModel;
  constructor() { }

  ngOnInit(): void {
  }

}
