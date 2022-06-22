import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pasaje } from 'src/app/models/pasaje';
import { PasajeService } from 'src/app/services/pasaje.service';

@Component({
  selector: 'app-pasaje',
  templateUrl: './pasaje.component.html',
  styleUrls: ['./pasaje.component.css']
})
export class PasajeComponent implements OnInit {

  pasajes:Array<Pasaje> =[]
  categoria:string =''
  constructor(private servicePasaje:PasajeService,private router:Router) { 
   this.obtenerTodos()

  }
obtenerTodos(){
  this.servicePasaje.obtenerPasajes().subscribe(
    (resultado:any) => {
      console.log(resultado)
      Object.assign(this.pasajes, resultado.pasajes);
      console.log(this.pasajes)
    }
  )
}
  obtenerPorCategoria(){
    this.servicePasaje.filtrarPasajes(this.categoria).subscribe(
      (data: any) => {
        this.pasajes = []
        Object.assign(this.pasajes, data.pasajes)
        console.log(this.pasajes)
      }
    )
  }
  ngOnInit(): void {
  }

  eliminarPasaje(id : string){
    this.servicePasaje.eliminarPasaje(id).subscribe(
      (resultado:any) => {
        console.log(resultado)
        
      }
    )
  }
  actualizarPasaje(id:string){
    this.router.navigate(["/pasajeForm",id])
  }
}
