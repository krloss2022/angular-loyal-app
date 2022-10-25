import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {

  options = ['op1','op2','op3'];

  constructor(private fb: FormBuilder) { }

  myForm: FormGroup = this.fb.group(
      {
        email: '',
        message: '',
        option: ''
      }
  );

  ngOnInit(): void {
    //escuchando los cambios sobre el formulario y hago log por medio de console.log
    this.myForm.valueChanges.subscribe(console.log);
  }

  submitForm() {
    console.log(this.myForm.valid);
  }
}
