import { Injectable } from '@angular/core';
import { HttpClientService } from 'src/app/implementation/http-client.service';
import { RespuestaSolicitud } from 'src/app/models/respuestaSolicitud.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultarreporteService {
  Respuesta: RespuestaSolicitud;
  
  constructor(
    private http: HttpClientService
  ) { }

consultaReporte(){

  this.http
  .get(`${environment.Api}ConsultaReporteGenerado/ConsultarReporteGenerado`)
  .subscribe(
    (res: any) => {
      if (res){
        console.log(res);
        this.Respuesta = res;
        if (this.Respuesta.Codigo ==1) {
          console.log(this.Respuesta);
        }
      }
    }
  )

}

}
