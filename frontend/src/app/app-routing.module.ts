import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibroFormComponent } from './components/libro-form/libro-form.component';
import { LibroComponent } from './components/libro/libro.component';
import { PasajeFormComponent } from './components/pasaje-form/pasaje-form.component';
import { PasajeComponent } from './components/pasaje/pasaje.component';
import { TransaccionFormComponent } from './components/transaccion-form/transaccion-form.component';
import { TransaccionComponent } from './components/transaccion/transaccion.component';

const routes: Routes = [
  {path:'libro', component :LibroComponent },
  {path:'libroForm', component :LibroFormComponent },
  {path:'transaccion', component :TransaccionComponent },
  {path:'pasaje', component : PasajeComponent },
  {path:'pasajeForm/:id', component :PasajeFormComponent },
  {path:'transaccionForm', component :TransaccionFormComponent },
  {path:'**', pathMatch:'full', redirectTo:'libro'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
