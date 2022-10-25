import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup,FormArray } from '@angular/forms'

@Component({
  selector: 'app-array-form',
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.css']
})
export class ArrayFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  myForm: FormGroup = this.fb.group(
      {
        email: '',
        phones: this.fb.array([])
      }
    );;

  get phoneForms() {
    return this.myForm.get('phones') as FormArray;
  }

  addPhone() {
    const phone = this.fb.group({
      area:[],
      prefix: [],
      line:[],
    });

    //agrgamos una vacio
    this.phoneForms.push(phone);
  }

  deletePhones(i:number) {
    this.phoneForms.removeAt(i);
  }

  ngOnInit(): void {
    // this.myForm.valueChanges.subscribe(console.log);
  }

  submitForm() {
    console.log(this.myForm.valid);
  }
}
