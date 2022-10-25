import { Component, Input, OnInit } from '@angular/core';
import { SaldoContainer } from '../../dashboard/dashboard.component';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css']
})
export class SaldoComponent implements OnInit {

  @Input()
  saldo?: SaldoContainer;

  constructor() { }

  ngOnInit(): void {
    console.log('' + this.saldo);
  }

}
