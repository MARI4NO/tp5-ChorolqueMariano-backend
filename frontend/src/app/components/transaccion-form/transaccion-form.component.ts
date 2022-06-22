import { Component, OnInit } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-transaccion-form',
  templateUrl: './transaccion-form.component.html',
  styleUrls: ['./transaccion-form.component.css']
})
export class TransaccionFormComponent implements OnInit {
  transaccion!: Transaccion
  constructor(private transaccionService: TransaccionService) {
    this.transaccion = new Transaccion()
   }
   
  ngOnInit(): void {
  }
  guardar() {
    this.transaccion.cantidadDestino = this.transaccion.cantidadOrigen * this.transaccion.tasaConversion
    console.log(this.transaccion)
    this.transaccionService.crearTransaccion(this.transaccion).subscribe()
    this.transaccion = new Transaccion()
  }
}
