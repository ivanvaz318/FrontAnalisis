import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from 'src/app/implementation/http-client.service';
import { ConfigService } from 'src/config/config.service';
import { environment } from 'src/environments/environment';
import { Comentarios, Comentario } from '../models/comentarios.models';
import { RespuestaSolicitud } from '../../models/respuestaSolicitud.model';
import { BehaviorSubject } from 'rxjs';
import {
  Respuestaanalisis,
  RespuestaAnalisis,
} from '../models/respuestaanalisis.models';
import Swal from 'sweetalert2';
import {
  Agreement,
  Irony,
  RespuestaGra,
  respuestaGraficas,
  Score_tag,
  Subjectivity,
} from '../models/respuestaGraficas.model';
import { map } from 'rxjs/operators';
import { VariablesService } from 'src/app/services/variables.service';

@Injectable({
  providedIn: 'root',
})
export class AnalizarcomentarioService {
  Respuesta: RespuestaSolicitud;
 

  respuestaGraficas: RespuestaGra = {
    agreement: null,
    confidence: null,
    irony: null,
    score_tag: null,
    subjectivity: null,
  };

  Score_tag: Score_tag = {
    positivo: null,
    negativo: null,
    neutro: null,
    none: null,
  };
  Agreement: Agreement = {
    AGREEMENT: null,
    DISAGREEMENT: null,
  };
  subjectivity: Subjectivity = {
    OBJECTIVE: null,
    SUBJECTIVE: null,
  };
  confidence: number;
  Irony: Irony = {
    IRONIC: null,
    NONIRONIC: null,
  };

  constructor(
    private http: HttpClientService,
    private router: Router,
    private config: ConfigService,
    private VariableGL: VariablesService
  ) {}

  enviarcomentario(Comentarios: any) {
    this.http
      .post(
        `${environment.Api}PreprocesaComentarios/AnalisisComentario`,
        Comentarios
      )
      .subscribe(
        (res: any) => {
          if (res) {
            //console.log(res);
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
            console.log('error de servidor');
          }
        }
      );
  }


  llenarrespuestaAnalisis(Data) {

    this.Score_tag.negativo = Data.score_tag.negativo;
    this.Score_tag.positivo = Data.score_tag.positivo;
    this.Score_tag.neutro = Data.score_tag.neutro;
    this.Score_tag.none = Data.score_tag.none;

    this.Agreement.AGREEMENT = Data.agreement.AGREEMENT;
    this.Agreement.DISAGREEMENT = Data.agreement.DISAGREEMENT;

    this.subjectivity.OBJECTIVE=Data.subjectivity.OBJECTIVE;
    this.subjectivity.SUBJECTIVE=Data.subjectivity.SUBJECTIVE;

    this.Irony.IRONIC=Data.irony.IRONIC;
    this.Irony.NONIRONIC=Data.irony.NONIRONIC;

    this.respuestaGraficas.score_tag = this.Score_tag;
    this.respuestaGraficas.confidence = Data.confidence;
    this.respuestaGraficas.agreement = this.Agreement;
    this.respuestaGraficas.subjectivity = this.subjectivity;
    this.respuestaGraficas.irony = this.Irony;

     this.VariableGL.resAnalisis.next(this.respuestaGraficas);
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
