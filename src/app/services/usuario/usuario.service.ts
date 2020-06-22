import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import swal from 'sweetalert';

import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class UsuarioService {

  usuario: Usuario;
  token: string;

  constructor(
    public http: HttpClient,
    public router: Router
  ) {
    this.cargarStorage();
  }

  estaLogueado() {
    return ( this.token.length > 5 ) ? true : false;
  }

  cargarStorage() {

    if ( localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse( localStorage.getItem('usuario') );
    } else {
      this.token = '';
      this.usuario = null;
    }

  }

  guardarStorage( id: string, token: string, usuario: Usuario ) {

    localStorage.setItem('id', id );
    localStorage.setItem('token', token );
    localStorage.setItem('usuario', JSON.stringify(usuario) );

    this.usuario = usuario;
    this.token = token;
  }

  logout() {
    swal({
      title: '¿Estás seguro?',
      text: 'Saldrás de la plataforma',
      icon: 'warning',
      buttons: ['No', 'Si'],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal('Has cerrado sesión', {
          icon: 'success',
        });

        this.usuario = null;
        this.token = '';
        localStorage.removeItem('token');
        localStorage.removeItem('usuario');
        this.router.navigate(['/login']);
      } else {
      }
    });
  }

  loginGoogle( token: string ) {

    let url = URL_SERVICIOS + '/login/google';

    return this.http.post( url, { token } )
                .pipe(
                  map( (resp: any) => {
                    this.guardarStorage( resp.id, resp.token, resp.usuario );
                    return true;
                  }));
  }

  login( usuario: Usuario, recordar: boolean = false ) {

    if ( recordar ) {
      localStorage.setItem('email', usuario.email );
    }else {
      localStorage.removeItem('email');
    }

    let url = URL_SERVICIOS + '/login';
    return this.http.post( url, usuario )
                .pipe(
                  map( (resp: any) => {
                    swal('Bienvenido', usuario.email, 'success');
                    this.guardarStorage( resp.id, resp.token, resp.usuario );
                    return true;
                  })
                  , catchError( err => {
                    //swal('Error en el login', 'Credenciales incorrectas', 'error');
                    //return Observable.throw(err);
                    return swal('Error en el login', 'Credenciales incorrectas', 'error');
                  })
                );
  }


  crearUsuario( usuario: Usuario ) {

    let url = URL_SERVICIOS + '/usuario';

    return this.http.post( url, usuario )
              .pipe(
                map( (resp: any) => {

                  swal('Usuario creado', usuario.email, 'success' );
                  return resp.usuario;
                })
              );
  }
}
