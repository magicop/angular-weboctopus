import { Component, OnInit } from '@angular/core';
import { ClienteModel } from 'src/app/models/cliente.model';
import { ClienteService } from '../../../services/cliente/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styles: [
  ]
})
export class ClientesComponent implements OnInit {

  clientes: ClienteModel[] = [];

  constructor(
    private clientesService: ClienteService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.clientes = null;
    this.clientesService.getClientes()
        .subscribe( (resp: ClienteModel[]) => {
          this.clientes = resp;
          this.clientes = this.clientes.filter(activo => activo);
          console.log(this.clientes);
          // console.log(this.productos[0].id);
        });
  }
}
