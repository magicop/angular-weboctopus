import { Component, OnInit } from '@angular/core';
import { ClienteModel } from '../../models/cliente.model';
import { NgForm } from '@angular/forms';
import { ClienteService } from '../../services/cliente/cliente.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styles: [
  ]
})
export class ClienteComponent implements OnInit {
  cliente: ClienteModel = new ClienteModel();

  constructor( private clienteService: ClienteService,
               private route: ActivatedRoute ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if ( id !== 'nuevo' ) {

      this.clienteService.getCliente( id )
        .subscribe( (resp: ClienteModel) => {
          console.log(resp);
          this.cliente = resp;
          this.cliente._id = id;
        });

    }
  }

  guardar( form: NgForm ){
    if (form.invalid) {
      return;
    }
    console.log(this.cliente._id);
    if (this.cliente._id) {
      this.clienteService.actualizarCliente(this.cliente)
        .subscribe();
    } else {
      this.clienteService.crearCliente(this.cliente)
        .subscribe();
    }
  }

}
