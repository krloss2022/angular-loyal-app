import { Component, OnInit } from '@angular/core';
import { ClienteDataService } from './../services/cliente-data.service';
import { InformacionCliente } from './../services/informacion-cliente';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../model/json-placeholder';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  informacion?:InformacionCliente;
  users:Users[] = [];

  constructor(
    private cds: ClienteDataService,
    private activatedRouter: ActivatedRoute
    ) { }

  ngOnInit(): void {
    //obteniendo desde la definicion de routing el nombre que puse para el resolve
    this.users = this.activatedRouter.snapshot.data['users']; //tipo any
    this.cds.getInformacionCliente().subscribe(
      data => this.informacion = data,
      error=> alert("error obteniendo los datos" + JSON.stringify(error))
    );
  }

}
