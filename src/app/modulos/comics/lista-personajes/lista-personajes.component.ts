import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/datos/api/marvel.service';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.scss']
})
export class ListaPersonajesComponent implements OnInit {

  constructor(private servicioMarvel: MarvelService) { }

  ngOnInit(): void {
    this.servicioMarvel.getPersonajes(1).subscribe(result =>{
      console.log(result)
    })
  }

}
