import { Component } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent {
  titulo: string = '¡Bienvenido a Angular!';
  mensaje: string = 'Este es un componente de saludo en Angular.';

  constructor() { }
  ngOnInit(): void {

  }
}
