import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app-loyal';
  mostrarLogin:boolean = true;
  applogin = 'applogin';
  nombres = ['juan','carlos','pedro'];
  nombre: string = '';

  agregarNombre() {
    this.nombres.push(this.nombre);
  }

  cambiarVisibilidad() {
    console.log('cambiando visibilidad');
    this.mostrarLogin = !this.mostrarLogin;
  }

  alert() {
    window.alert();
  }

  cambiarClase() {
    this.applogin = 'otraClase';
  }
}
