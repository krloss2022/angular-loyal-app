import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SaldoComponent } from './components/saldo/saldo.component';
import { DatosEquipoComponent } from './components/datos-equipo/datos-equipo.component';
import { ContactoClienteComponent } from './components/contacto-cliente/contacto-cliente.component';
import { RecomendacionesComponent } from './components/recomendaciones/recomendaciones.component';
import { TemplateDrivenComponent } from './formularios/template-driven/template-driven.component';
import { ReactiveFormComponent } from './formularios/reactive-form/reactive-form.component';
import { ArrayFormComponent } from './formularios/array-form/array-form.component';
import { HttpClientModule } from '@angular/common/http'

/*material */
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import { NestedFormComponent } from './formularios/nested-form/nested-form.component';
import { BasicFormComponent } from './formularios/basic-form/basic-form.component';
@NgModule({
  /*definir las vitas que formar parte del módulo */
  declarations: [
    AppComponent,
    UsersComponent,/*ng g c users */
    LoginComponent,/*ng g c login */
    DashboardComponent,
    NavbarComponent,
    TopbarComponent,
    FooterComponent,
    SaldoComponent,
    DatosEquipoComponent,
    ContactoClienteComponent,
    RecomendacionesComponent,
    TemplateDrivenComponent,
    ReactiveFormComponent,
    ArrayFormComponent,
    NestedFormComponent,
    BasicFormComponent,
  ],
  /*export de otro módulos que importamos */
  imports: [
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    /*meterial*/
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    /*http module */
    HttpClientModule
  ],
  /*servcios que se pueden acceder desde cualuier parte de la aplicación */
  providers: [],
  /*componente inical de la aplicación */
  bootstrap: [AppComponent]
})
export class AppModule { }
