import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {
  libro: Libro = new Libro();
  libros!: Array<Libro>;
  indice: number = 0;
  constructor(private serviceLibro:LibroService) {
    this.libros = new Array<Libro>();
   
    this.serviceLibro.getLibrosDestacados().subscribe(
      (resultado:any) => {
        console.log(resultado)
        
        Object.assign(this.libros, resultado.libros);
        Object.assign(this.libro, resultado.libros[0]);
        console.log(this.libros)
      }
    )
    this.iniciar();
   }

  ngOnInit(): void {
  }
  iniciar(){
    if(this.indice <this.libros.length){
      this.libro = this.libros[this.indice];
    }
  }

  anterior() {
    this.indice =this.indice - 1;
    if(this.indice <= -1 ){
      this.indice = this.libros.length;
    }
    if(this.indice< this.libros.length){
      this.libro=this.libros[this.indice];
    }
  }

  siguiente() {
    this.indice =this.indice +1;
    if(this.indice >= this.libros.length ){
      this.indice = 0;
    }
    if(this.indice< this.libros.length){
      this.libro=this.libros[this.indice];
    }
  }
}
