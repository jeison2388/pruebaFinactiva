import {MatTableDataSource} from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MarvelService } from 'src/app/datos/api/marvel.service';
import { ListaPersonajeModel } from 'src/app/dominio/modelos/listaPersonajes.model';
import { PersonajeModel } from 'src/app/dominio/modelos/personaje.model';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.scss']
})
export class ListaPersonajesComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;

  listaDatos: ListaPersonajeModel
  paginaActual: number
  cantidadColumnas: number
  ordenComponentes: string
  alineacionComponentes: string

  constructor(private servicioMarvel: MarvelService) { 
    this.listaDatos = new ListaPersonajeModel()
    this.paginaActual = 1
    this.cantidadColumnas = 2
    this.ordenComponentes = 'row'
    this.alineacionComponentes = 'space-evenly start'
  }

  ngOnInit(): void {
    this.getPersonajes()
  }

  getPersonajes(){
    this.servicioMarvel.getPersonajes(this.paginaActual).subscribe(result =>{
      this.listaDatos = result
    })
  }

  cambiarPagina(paginaNueva: number): void{
    this.paginaActual = paginaNueva
    this.getPersonajes()
  }

  reajustarGrid(event: any){
    this.cantidadColumnas = (event.target.innerWidth <= 1280) ? 1 : 2 ;
    if(event.target.innerWidth <= 1280) {
      this.ordenComponentes = 'column'
      this.alineacionComponentes = 'space-between '
    } else {
      this.ordenComponentes = 'row'
      this.alineacionComponentes = 'space-evenly start'
    }
    
  }

}
