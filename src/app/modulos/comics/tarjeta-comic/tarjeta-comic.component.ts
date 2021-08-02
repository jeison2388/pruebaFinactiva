import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ComicModel } from 'src/app/dominio/modelos/comic.model';

@Component({
  selector: 'app-tarjeta-comic',
  templateUrl: './tarjeta-comic.component.html',
  styleUrls: ['./tarjeta-comic.component.scss']
})
export class TarjetaComicComponent implements OnInit {

  @Input() comic!: ComicModel;
  mostrarIconoCerrar: boolean
  constructor(@Inject(MAT_DIALOG_DATA) public datosRecibidos: ComicModel) { 
    this.mostrarIconoCerrar = false
  }

  ngOnInit(): void {
    if(!this.comic){
      this.comic = this.datosRecibidos
      this.mostrarIconoCerrar = true
    }
  }

}
