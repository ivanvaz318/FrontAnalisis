import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from 'src/app/implementation/http-client.service';
import { ConfigService } from 'src/config/config.service';
import { environment } from 'src/environments/environment';
import { Comentarios, Comentario } from '../models/comentarios.models';

@Injectable({
  providedIn: 'root'
})
export class AnalizarcomentarioService {

  constructor(
    private http: HttpClientService,
    private router: Router,
    private config: ConfigService
  ) { }

  enviarcomentario(Comentarios:any){
    this.http
      .post(`${environment.Api}PreprocesaComentarios/AnalisisComentario`,Comentarios)
      .subscribe(
        (res: any) => {
          if (res) {
            console.log(res);

            //agrege ahorita

           /* this.Respuesta = res;

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
*/
            //termina LO AGREGADO

          }
        },
        (err) => {
          if (err.status == 0) {
            console.log(err);
            
            localStorage.clear();
           // location.reload();
          }
        }
      );
  }
}
