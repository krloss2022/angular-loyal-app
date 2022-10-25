import { Component, OnInit } from '@angular/core';
import { ClienteDataService } from './../services/cliente-data.service';
import { InformacionCliente } from './../services/informacion-cliente';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  informacion?:InformacionCliente;

  constructor(
    private cds: ClienteDataService,
    ) { }

  ngOnInit(): void {
    this.cds.getInformacionCliente().subscribe(
      data => this.informacion = data,
      error=> alert("error obteniendo los datos" + JSON.stringify(error))
    );
  }

}
