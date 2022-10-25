import { Component, Input, OnInit } from '@angular/core';
import { DatosEquipo } from './../../dashboard/dashboard.component';

@Component({
  selector: 'app-datos-equipo',
  templateUrl: './datos-equipo.component.html',
  styleUrls: ['./datos-equipo.component.css']
})
export class DatosEquipoComponent implements OnInit {

  @Input()
  equipo?: DatosEquipo[]

  constructor() { }

  ngOnInit(): void {
    console.log(this.equipo);
  }

}
