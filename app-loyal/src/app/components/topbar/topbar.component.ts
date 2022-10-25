import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteHttpService } from 'src/app/services/cliente-http.service';
import { ClienteDataService } from './../../services/cliente-data.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private clienteHttpSerive: ClienteHttpService,
    private clienteDataService: ClienteDataService
    ) { }

  searchForm: FormGroup = this.fb.group({
    numeroTelefono: ['', [Validators.required]],
  });

  ngOnInit(): void {
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

}
