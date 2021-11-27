import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'marlon';
  nombreUpper: string = 'MARLON';
  nombreCompleto: string = 'mArLoN oRiHuElA';

  fecha: Date = new Date(); //fecha de hoy


}
