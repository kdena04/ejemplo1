import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'}
)
export class AppComponent {
  title = 'fundamentos';

  //propiedades 

  nombre= 'Alejandro';
  email= 'acvalencia@utsjr.edu.mx';
  aniosServicio= 22;
  activo=false;
  alumnos=[24,25,26];
  numero = 5;
  contador= 0;
  desactivarBoton = true;

  productos = [

    {
      id: 1,
      descripcion: 'Cocada',
      precio: 15.15
    },
    {
      id: 2,
      descripcion: 'Sabritas',
      precio: 20.50
    },
    {
      id: 3,
      descripcion: 'Manguito',
      precio: 11
    }

  ];

  //funcion que muestra si el profesor esta activo o no
  estaActivo(){
    if(this.activo){
      return 'Empleado activo';

    }else{
      return'Empleado inactivo';
    }
  };
  
  //funcion que suma los alumnos del arreglo
  sumarAlumnos(){
    let suma =0;
    for(let i=0; i<this.alumnos.length;i++){
      suma += this.alumnos[i];
    }
    return suma;
  };

  //funcion que incrementa el contador
  incrementarContador(){
    this.contador++;
  };

  //funcion que decrementa el contador
  decrementarContador(){
    this.contador--;
  };

  //funcion que cambia el valor de desactivar boton
  cambiarValor(){
    if(this.desactivarBoton){
      this.desactivarBoton= false;
    }
  }
}