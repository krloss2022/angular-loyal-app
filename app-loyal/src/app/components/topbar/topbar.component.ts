import { Input, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteHttpService } from 'src/app/services/cliente-http.service';
import { ClienteDataService } from './../../services/cliente-data.service';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Comment, Users } from '../../model/json-placeholder';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  @Input()
  users?: Users[];

  posts:Comment[] = [];

  constructor(
    private fb: FormBuilder,
    private clienteHttpSerive: ClienteHttpService,
    private clienteDataService: ClienteDataService,
    private http: HttpClient
    ) { }

  searchForm: FormGroup = this.fb.group({
    numeroTelefono: ['', [Validators.required]],
  });

  ngOnInit(): void {
    console.log(this.users);
    this.http.get<Comment[]>(`${environment.url_jph_path}/comments?postId=1`).subscribe(
      data => this.posts = data
    );
  }

  executeSearch() {
    //1 - invocar el metood search
    if(this.searchForm.invalid) {
      return ;
    }

    this.clienteHttpSerive.search(this.searchForm.get('numeroTelefono')?.value).subscribe(
      //success
      data => {
        //convertir antes de hacer ul update.
        this.clienteDataService.updateCliente(data);
      },
      //error
      error => {
        alert('error consultando:' + JSON.stringify(error));
      },
      //end
      () => {
        console.log('fin de la busqueda')
      }
    );
  }

  reset(): void {
    this.clienteDataService.clear();
  }
}
