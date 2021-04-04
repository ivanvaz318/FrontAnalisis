import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClientService } from 'src/app/implementation/http-client.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultanumRCService {

  Respuesta = new BehaviorSubject<any>(null);

  constructor(private http: HttpClientService) { }

  // consultanumRC():Observable<any>{
  // return this.http.get(`${environment.Api}InicioConsultaRC/consultaCR`);
  // }


  consultanumRC() {
    this.http
      .get(`${environment.Api}InicioConsultaRC/consultaCR`)
      .subscribe(
        (res: any) => {
          if (res) {
          

            if (res.Codigo == 1) {
             this.Respuesta.next(res.Data);
            }
            
          }
        }
      );
  }

}
