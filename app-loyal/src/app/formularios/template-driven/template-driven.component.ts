import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(form: any) : void {
    if(!form.form.valid) {
      alert('formulario invalido');
      return;
    }

    //invocacion!

    console.log(form)
  }
}
