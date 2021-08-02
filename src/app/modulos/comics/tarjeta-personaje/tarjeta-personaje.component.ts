import { Component, Input, OnInit } from '@angular/core';
import { PersonajeModel } from 'src/app/dominio/modelos/personaje.model';

@Component({
  selector: 'app-tarjeta-personaje',
  templateUrl: './tarjeta-personaje.component.html',
  styleUrls: ['./tarjeta-personaje.component.scss']
})
export class TarjetaPersonajeComponent implements OnInit {

  @Input() personaje!: PersonajeModel;

  constructor() { }

  ngOnInit(): void {
    console.log(this.personaje)
  }

}
