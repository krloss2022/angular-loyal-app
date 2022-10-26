import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  constructor(private router:Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(err => {
      if (err.status === 401) {
          // auto logout if 401 response returned from api
          location.reload();
          // this.router.navigate(['/401']);
      }

      const error = err.error.error || err.message || err.statusText || 'Error no controlado..'/* JSON.stringify(err);*/
      // this.alertService.error(error);
      return throwError(error);
  }));
  }
}
