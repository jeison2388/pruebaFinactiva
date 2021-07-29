import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { BuscadorPersonajesComponent } from './modulos/genericos/buscador-personajes/buscador-personajes.component';
import { GenericosModule } from './modulos/genericos/genericos.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxSpinnerModule,
    GenericosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
