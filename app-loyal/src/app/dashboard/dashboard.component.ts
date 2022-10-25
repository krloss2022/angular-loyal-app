import { Component, OnInit } from '@angular/core';
export interface DatosEquipo {
  texto:string,
  valor:string
}
export interface SaldoContainer {
  saldos: Saldo[];
}
export interface Saldo {
  id: number,
  texto: string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  datosEquipo:DatosEquipo[] = [
    {texto:'IMEI',valor:'31321321231231'},
    {texto:'ESTADO LINEA',valor:'ACTIVO'},
    {texto:'FABRICANTE',valor:'OTRO FABRICANTE'},
    {texto:'EQUIPO EN USO',valor:'SI'},
    {texto:'MISDN',valor:'321312231'}
  ];

  saldos:SaldoContainer = {saldos:[{id:1,texto:'saldo1'}]};

  constructor() { }

  ngOnInit(): void {
  }


}
