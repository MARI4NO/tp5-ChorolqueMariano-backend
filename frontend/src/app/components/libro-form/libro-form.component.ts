import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-libro-form',
  templateUrl: './libro-form.component.html',
  styleUrls: ['./libro-form.component.css']
})
export class LibroFormComponent implements OnInit {
  libro!:Libro;

  constructor(private serviceLibro:LibroService) {
    this.libro = new Libro();
    this.libro.destacado = false
   }

  ngOnInit(): void {
  }
  guardar(){
    console.log(this.libro)
    this.serviceLibro.crearLibro(this.libro).subscribe(
      (data:any) => console.log(data)
    )
  }
}
