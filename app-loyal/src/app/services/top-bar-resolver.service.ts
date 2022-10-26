import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TopBarResolverService implements Resolve<any>{

  //usamos el httpclient
  constructor(
    private httpClient: HttpClient
  ) {
    //console.log('TopBarResolverService');
  }

  resolve( ): Observable<any> | any {
      //console.log('.resolve()');
      return this.httpClient.get(`${environment.url_jph_path}/users`);
  }
}
