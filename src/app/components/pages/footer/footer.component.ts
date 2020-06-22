import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../../../services/empresa/empresa.service';
import { Router } from '@angular/router';
import { EmpresaModel } from 'src/app/models/empresa.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  empresas: EmpresaModel[] = [];

  constructor(
    private empresasService: EmpresaService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.empresas = null;
    this.empresasService.getEmpresas()
        .subscribe( (resp: EmpresaModel[]) => {
          this.empresas = resp;
          // console.log(this.productos[0].id);
        });
  }

  scroll(element: any) {
    console.log(element);
    switch (element) {
      case 'somos':
        element = document.querySelector('#somos');
        break;
      case 'slider':
        element = document.querySelector('#slider');
        break;
      case 'clientes':
        element = document.querySelector('#clientes');
        break;
      case 'categorias':
        element = document.querySelector('#categorias');
        break;
      case 'contacto':
        element = document.querySelector('#contacto');
        break;
      default:
        break;
    }

    setTimeout(() => element.scrollIntoView({behavior: 'smooth'}), 100);
    // element.scrollIntoView({ behavior: 'smooth' });
    // element = null;
  }
}
