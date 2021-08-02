import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DbLocalService } from 'src/app/datos/api/db-local.service.ts.service';
import { ComicModel } from 'src/app/dominio/modelos/comic.model';

@Component({
  selector: 'app-tarjeta-comic',
  templateUrl: './tarjeta-comic.component.html',
  styleUrls: ['./tarjeta-comic.component.scss']
})
export class TarjetaComicComponent implements OnInit {

  @Input() comic!: ComicModel;
  mostrarIconoCerrar: boolean
  constructor(@Inject(MAT_DIALOG_DATA) public datosRecibidos: ComicModel, private servicioDbLocal: DbLocalService,
   private snackBar: MatSnackBar) { 
    this.mostrarIconoCerrar = false
  }

  ngOnInit(): void {
    if(!this.comic){
      this.comic = this.datosRecibidos
      this.mostrarIconoCerrar = true
    }
  }

  agregarComicAFavoritos(){
    if(!this.servicioDbLocal.existeComic(this.comic)) {
      this.servicioDbLocal.agregarComicAFavoritos(this.comic)
      //mostrar mensaje agregado correntamente
    } else{
      this.mostrarMensajeComicYaAgregado()
    }
    
  }

  mostrarMensajeComicYaAgregado(){
    this.snackBar.open('Comic ya fue agegado a favoritos', 'Cerrar', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

}
