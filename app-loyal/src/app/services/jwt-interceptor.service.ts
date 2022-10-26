import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    //obtener de algun servicio el usuario logueado!
    //obtener token de dicho usuario
    //
    const token = 'jwtinventadopormi';
    req = req.clone(
      {
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    // debugger;
    return next.handle(req);
  }
}
