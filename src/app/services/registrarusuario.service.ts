import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from 'src/config/config.service';
import { environment } from 'src/environments/environment';
import { HttpClientService } from '../implementation/http-client.service';
import { RegistrarUsuario } from '../models/registrarUsuario.model';
import { RespuestaSolicitud } from '../models/respuestaSolicitud.model';

import Swal from 'sweetalert2';
import { Reporte } from '../shared/models/respuestaReporte.model';

@Injectable({
  providedIn: 'root',
})
export class RegistrarusuarioService {
  Respuesta: RespuestaSolicitud;
  reporte: Reporte;

  constructor(
    private http: HttpClientService,
    private router: Router,
    private config: ConfigService
  ) {}

  registraUsuario(datosUsuario: RegistrarUsuario) {
    console.log(datosUsuario);
    
    this.http
    .post(`${environment.Api}User/InsertUser`,datosUsuario)
    .subscribe(
      (res: any) => {
        if (res) {
          this.Respuesta = res;
          if (this.Respuesta.Codigo == 1) {
            console.log(this.Respuesta);
            
            Swal.fire({
              
              icon: 'success',
              title: 'Registro Exitoso',
              showConfirmButton: false,
              timer: 1500
            })
            this.router.navigate(['/login'], { replaceUrl: true });
          }
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
