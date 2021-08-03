import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MarvelService } from 'src/app/datos/api/marvel.service';

@Component({
  selector: 'app-buscador-personajes',
  templateUrl: './buscador-personajes.component.html',
  styleUrls: ['./buscador-personajes.component.scss']
})
export class BuscadorPersonajesComponent implements OnInit {

  buscadorForm!: FormGroup;

  constructor(public formBuilder: FormBuilder, private servicioMarvel: MarvelService) { }

  ngOnInit(): void {
    this.buscadorForm = this.formBuilder.group({
      buscador: [''],
    });

    this.buscadorForm.get('buscador')!.valueChanges.subscribe(cadenaBusqueda =>{
      this.servicioMarvel.observadorBusquedaPersonajes.next(cadenaBusqueda)
    })

  }

}
