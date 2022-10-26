import { Component, OnInit,Input } from '@angular/core';
import { Recomendaciones } from 'src/app/services/informacion-cliente';

@Component({
  selector: 'app-recomendaciones',
  templateUrl: './recomendaciones.component.html',
  styleUrls: ['./recomendaciones.component.css']
})
export class RecomendacionesComponent implements OnInit {

  @Input()
  recomendaciones?: Recomendaciones

  constructor() { }

  ngOnInit(): void {
  }

}
