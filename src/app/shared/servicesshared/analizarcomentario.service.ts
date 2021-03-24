import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from 'src/app/implementation/http-client.service';
import { ConfigService } from 'src/config/config.service';
import { environment } from 'src/environments/environment';
import { Comentarios, Comentario } from '../models/comentarios.models';
import { RespuestaSolicitud } from '../../models/respuestaSolicitud.model';
import { BehaviorSubject } from 'rxjs';
import { Respuestaanalisis,RespuestaAnalisis,} from '../models/respuestaanalisis.models';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AnalizarcomentarioService {
  Respuesta: RespuestaSolicitud;
  resAnalisis = new BehaviorSubject<RespuestaAnalisis[]>(null);
  arreglocomentarios: RespuestaAnalisis[]=[];
  constructor(
    private http: HttpClientService,
    private router: Router,
    private config: ConfigService
  ) {}

  enviarcomentario(Comentarios: any) {
    console.log("Data a enviar", Comentarios);
    
    this.http
      .post(`${environment.Api}PreprocesaComentarios/AnalisisComentario`,Comentarios)
      .subscribe(
        (res: any) => {
          if (res) {
            console.log(res);
            this.Respuesta = res;
            switch (this.Respuesta.Codigo) {
              case 1:
                this.llenarrespuestaAnalisis(this.Respuesta.Data);
                break;
              case 3:
                this.mensajeerror();
                break;
              default:
                break;
            }
          }
        },
        (err) => {
          console.log(err);
          if (err.status == 0) {
            console.log(err);
            localStorage.clear();
            location.reload();
          }
          if (err.status == 500) {
            console.log("error de servidor");
          
          }
        }
      );
  }

  llenarrespuestaAnalisis(Data: any) {

   
    Data.forEach(comentario => {
      this.arreglocomentarios.push(comentario);
    });
 
      this.resAnalisis.next(this.arreglocomentarios);
    this.router.navigate(['/resultado'], { replaceUrl: true });
  }

  mensajeerror() {
    Swal.fire({
      title: 'Atencion',
      text: 'Su comentario no pudo ser analizado',
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Ok',
    }).then((result) => {
        location.reload();
    });
  }
}
