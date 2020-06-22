import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClienteModel } from '../../models/cliente.model';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
    public router: Router
  ) { }

  getClientes(){
    return this.http.get(`${ this.url }/clientes/`)
                .pipe(
                  map( this.crearArreglo )
                );
  }

  private crearArreglo(clientesObj: object){
    const clientes: ClienteModel[] = [];
    if ( clientesObj === null ){
      return [];
    }

    Object.keys(clientesObj).forEach( (key, i) => {
      const cliente: ClienteModel = clientesObj[key];

      clientes.push(cliente);

    });

    return clientes[0];
  }
}
