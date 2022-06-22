import { Component, OnInit } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrls: ['./transaccion.component.css']
})
export class TransaccionComponent implements OnInit {

  transacciones: Array<Transaccion> = []
  origen: string = ""
  destino: string = ""
 
  ngOnInit(): void {
    this.obtenerTransacciones()
  }
  
  constructor(private transaccionService: TransaccionService) {
    
  }

  obtenerTransacciones(){
    this.transaccionService.obtenerTransacciones().subscribe(
      (data: any) => {
        Object.assign(this.transacciones, data.transacciones)
        console.log(this.transacciones)
      }
    )
  }
  

  obtenerPorDivisa(){
    this.transaccionService.filtrarTransacciones(this.origen,this.destino).subscribe(
      (data: any) => {
        this.transacciones = []
        Object.assign(this.transacciones, data.transacciones)
        console.log(this.transacciones)
      }
    )
  }
}
