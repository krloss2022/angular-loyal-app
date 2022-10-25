import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { InformacionCliente } from './informacion-cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteDataService {

  //dar una estado inicial a los datos
  datosVacios = {
    saldos: {datosSaldos:[]},
    equipo: {datosEquipo: []},
    cliente: {contactos: []},
    recomendaciones: { recomendaciones:[]}
  };

  //rxjs
  //subject > BeheviorSubject
  private informacionClienteSubject = new BehaviorSubject<InformacionCliente>(this.datosVacios);
  private currentiInformacionCliente: Observable<InformacionCliente> = this.informacionClienteSubject.asObservable();

  constructor() { }

  clear(): void {
    this.informacionClienteSubject.next(this.datosVacios);
  }

  updateCliente(nuevaInformacionDeCliente: InformacionCliente): void {
    //actualiza el estado de subject
    this.informacionClienteSubject.next(nuevaInformacionDeCliente);
  }

  getInformacionCliente(): Observable<InformacionCliente> {
    return this.currentiInformacionCliente;
  }
}
