import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.css']
})
export class NestedFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  phone = this.fb.group({
    area:[],
    prefix:[],
    line:[]
  });
  cell = this.fb.group({
    area:[],
    prefix:[],
    line:[]
  });

  myForm: FormGroup = this.fb.group(
    {
      email: '',
      homePhone: this.phone,
      cellPhone: this.cell
    }
  );

  ngOnInit(): void {
  }

  submitForm() {
    console.log(this.myForm.valid);
  }
}
