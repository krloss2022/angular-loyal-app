import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  /*definir las vitas que formar parte del módulo */
  declarations: [
    AppComponent,
    UsersComponent,/*ng g c users */
    LoginComponent /*ng g c login */
  ],
  /*export de otro módulos que importamos */
  imports: [
  BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  /*servcios que se pueden acceder desde cualuier parte de la aplicación */
  providers: [],
  /*componente inical de la aplicación */
  bootstrap: [AppComponent]
})
export class AppModule { }
