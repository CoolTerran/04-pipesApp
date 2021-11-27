import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Marlon';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Hernando', 'Marlon', 'Fernando'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarPersona() {
    if(this.genero == 'masculino') {
      this.nombre = 'Karina';
      this.genero = 'femenino';
    } else {
      this.genero = 'masculino';
      this.nombre = 'Marlon';
    }
  }

  borrarCliente() {
    this.clientes.pop();
  }

  //Keyvalue Pipe
  persona = {
    nombre: 'Marlon',
    edad: 34,
    direccion: 'Lima, Perú'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //Async Pipe
  miObservable = interval(2000); //0, 1, 2, 3, 4, 5, ...

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });

}
