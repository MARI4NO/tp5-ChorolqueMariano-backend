import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibroComponent } from './components/libro/libro.component';
import { LibroFormComponent } from './components/libro-form/libro-form.component';
import { TransaccionComponent } from './components/transaccion/transaccion.component';
import { TransaccionFormComponent } from './components/transaccion-form/transaccion-form.component';
import { HeaderComponent } from './components/header/header.component';
import { PasajeComponent } from './components/pasaje/pasaje.component';
import { PasajeFormComponent } from './components/pasaje-form/pasaje-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LibroComponent,
    LibroFormComponent,
    TransaccionComponent,
    TransaccionFormComponent,
    HeaderComponent,
    PasajeComponent,
    PasajeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
