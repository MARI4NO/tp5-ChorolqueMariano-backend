import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pasaje } from 'src/app/models/pasaje';
import { Persona } from 'src/app/models/persona';
import { PasajeService } from 'src/app/services/pasaje.service';

@Component({
  selector: 'app-pasaje-form',
  templateUrl: './pasaje-form.component.html',
  styleUrls: ['./pasaje-form.component.css']
})
export class PasajeFormComponent implements OnInit {
  pasaje!: Pasaje
  personas: Array<Persona> = []
  action: string = ""
  constructor(private servicePasaje: PasajeService, private route: ActivatedRoute) {
    this.pasaje = new Pasaje()
    this.pasaje.pasajero = new Persona()
  }

  ngOnInit(): void {
    this.servicePasaje.obtenerPersonas().subscribe((resultado: any) => {
      console.log(resultado)
      Object.assign(this.personas, resultado.personas);
      console.log(this.personas)
    })
    console.log(this.personas)
    
    this.route.params.subscribe((params) => {

      if (params['id'] != null) {
        if (params['id'] == -1) {
          this.action = "nuevo"
        }
        else {
          this.action = "editar"
          this.servicePasaje.obtenerPasaje(params['id']).subscribe((resultado: any) => {
            console.log(resultado)
            Object.assign(this.pasaje, resultado.pasaje);
            console.log(this.pasaje)
          })

        }
      }
    }
    )
  }

  guardar() {
    if (this.action == "nuevo") {
      this.servicePasaje.guardarPasaje(this.pasaje).subscribe()
    }
    else{
      this.servicePasaje.editarPasaje(this.pasaje).subscribe()
    }
    this.pasaje = new Pasaje()
  }
}
