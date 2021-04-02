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
  Report = new BehaviorSubject<any>(null);
  arregloReportes:any[] =[];
  
  constructor(
    private http: HttpClientService
  ) { }

consultaReporte(){

  this.http
  .get(`${environment.Api}ConsultaReporteGenerado/ConsultarReporteGenerado`)
  .subscribe(
    (res: any) => {
      if (res){
       
        this.Respuesta = res;
        if (this.Respuesta.Codigo ==1) {
          this.arregloReportes.push(this.Respuesta.Data);
         
          this.Report.next(this.Respuesta.Data);        
        }
      }
    }
  );

}

}
