import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from '../implementation/http-client.service';
import { ConfigService } from '../../config/config.service';
import { UsuarioLogin } from '../models/usuarioLogin.models';
import { environment } from 'src/environments/environment';
import { RespuestaSolicitud } from '../models/respuestaSolicitud.model';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  Respuesta: RespuestaSolicitud;
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

              let nom = this.Respuesta.Data[0]['Nombre'];
              Swal.fire('Bienvenido!', `${nom}`, 'success');

              localStorage.setItem('tk', this.Respuesta.Data[0]['Token']);
              this.router.navigate(['/'], { replaceUrl: true });
            }
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
