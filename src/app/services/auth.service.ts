import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from '../implementation/http-client.service';
import { ConfigService } from '../../config/config.service';
import { UsuarioLogin } from '../models/usuarioLogin.models';
import { environment } from 'src/environments/environment';
import { RespuestaSolicitud } from '../models/respuestaSolicitud.model';

import Swal from 'sweetalert2';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  Respuesta: RespuestaSolicitud;
  User = new BehaviorSubject<Usuario>(null);
  constructor(
    private http: HttpClientService,
    private router: Router,
    private config: ConfigService
  ) {}

  login(Credenciales: UsuarioLogin) {
    this.http
      .post(`${environment.Api}login/authenticate`, Credenciales)
      .subscribe(
        (res: any) => {
          if (res) {
            this.Respuesta = res;

            if (this.Respuesta.Codigo == 1) {
              console.log(this.Respuesta.Data);
              let data2: any = this.Respuesta.Data;

              data2.forEach((usuario) => {
                this.User.next(
                  new Usuario(
                    null,
                    usuario.Nombre,
                    usuario.ApellidoPaterno,
                    null,
                    usuario.Email,
                    null,
                    null,
                    usuario.Token
                  )
                );
              });

              let nom = this.Respuesta.Data[0]['Nombre'];
              Swal.fire('Bienvenido!', `${nom}`, 'success');

              localStorage.setItem('tk', this.Respuesta.Data[0]['Token']);
              this.router.navigate(['/'], { replaceUrl: true });
            }
            this.config.setLocal();
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }

  getUser(){
    this.http.get(`${environment.Api}User/SearchUser?Nombre=Ivan&Ivanvaz@gmail.com`).subscribe(
      (res:any)=>{
        console.log(res);
        
      }
    )
      
  }
}
