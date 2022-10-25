import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment.prod';
import { Observable } from 'rxjs';
import { InformacionCliente } from './informacion-cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteHttpService {

  //url base
  urlSearch = environment.url_api_reqres;
  endPoint = '/assets/datos.json';

  //de un json propio

  /*podemos hacer peticion http: REST*/
  constructor(private httpClient: HttpClient) { }

  search(clave:string): Observable<InformacionCliente>{
    //await fetch('url')
    console.log('buscando: ' , clave);

    //rest api : enviar la clave!

    return this.httpClient.get<InformacionCliente>(this.endPoint);
  }
  /*
  post(): void {
    this.httpClient.post('',{},{});
  }*/
}
