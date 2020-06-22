import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmpresaModel } from '../../models/empresa.model';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private url = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
    public router: Router
  ) { }

  getEmpresas(){
    return this.http.get(`${ this.url }/empresas/`)
                .pipe(
                  map( this.crearArreglo )
                );
  }

  private crearArreglo(empresasObj: object){
    const empresas: EmpresaModel[] = [];
    if ( empresasObj === null ){
      return [];
    }

    Object.keys(empresasObj).forEach( (key, i) => {
      const empresa: EmpresaModel = empresasObj[key];
      empresas.push(empresa);
    });

    return empresas[0];
  }
}
