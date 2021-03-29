import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClientService } from 'src/app/implementation/http-client.service';
import { RespuestaSolicitud } from 'src/app/models/respuestaSolicitud.model';
import { environment } from 'src/environments/environment';
import { Reporte } from '../models/respuestaReporte.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultarreporteService {
  
  Respuesta: RespuestaSolicitud;
  Report = new BehaviorSubject<Reporte[]>(null);
  arregloReportes:Reporte[] =[];
  
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
          let resReporte: any = this.Respuesta.Data;

          resReporte.forEach((reportes) => {
          this.arregloReportes.push(reportes);            
          });
        }
      }
    }
  );

}

}
