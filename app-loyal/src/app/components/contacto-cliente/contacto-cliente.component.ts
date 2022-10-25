import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from '../../services/informacion-cliente';

@Component({
  selector: 'app-contacto-cliente',
  templateUrl: './contacto-cliente.component.html',
  styleUrls: ['./contacto-cliente.component.css']
})
export class ContactoClienteComponent implements OnInit {

  @Input()
  cliente?: Cliente;

  constructor() { }

  ngOnInit(): void {
  }

}
