import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  //inicializamos el formulario
  loginForm: FormGroup = this.createForm();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }

  createForm(): FormGroup {
    this.loginForm = this.formBuilder.group(
      {
       username: ['',Validators.required],
      }
    );
    return this.loginForm;
  }

  hasError(): boolean {
    return this.loginForm.invalid;
  }
}
