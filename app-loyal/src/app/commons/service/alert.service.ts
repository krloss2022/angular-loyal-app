import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private subject = new Subject();
  // private keepAfterRouteChange = false;

  constructor(
    private router: Router
  ) {

    //escuchar los cambios en el router
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
          this.clear();
      }
  });
  }

  success(msj: string): void {
    this.subject.next({type:'success', text: msj})
  }

  error(msj: string): void {
    this.subject.next({type:'error', text: msj})
  }

  clear():void {
    this.subject.next(null);
  }

  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }
}
