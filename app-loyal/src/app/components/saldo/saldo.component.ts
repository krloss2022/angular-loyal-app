import { Component, Input, OnInit } from '@angular/core';
import { Saldos } from 'src/app/services/informacion-cliente';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css']
})
export class SaldoComponent implements OnInit {

  @Input()
  saldo?: Saldos;

  constructor() { }

  ngOnInit(): void {
    console.log('' + this.saldo);
  }

}
