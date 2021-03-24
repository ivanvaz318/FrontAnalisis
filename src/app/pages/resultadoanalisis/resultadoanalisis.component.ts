import { Component, OnInit } from '@angular/core';
import { AnalizarcomentarioService } from 'src/app/shared/servicesshared/analizarcomentario.service';
import {
  Respuestaanalisis,
  RespuestaAnalisis,
} from '../../shared/models/respuestaanalisis.models';

@Component({
  selector: 'app-resultadoanalisis',
  templateUrl: './resultadoanalisis.component.html',
  styleUrls: ['./resultadoanalisis.component.css'],
})
export class ResultadoanalisisComponent implements OnInit {
  RespuestaAnalisisComentario: RespuestaAnalisis[];
  constructor(private analisis: AnalizarcomentarioService) {
    this.analisis.resAnalisis.subscribe((data) => {
      if (data) {
        this.RespuestaAnalisisComentario = data;
        console.log(this.RespuestaAnalisisComentario);
      }
    });
  }

  ngOnInit() {
    this.analisis.resAnalisis.subscribe((data) => {
      if (data) {
        this.RespuestaAnalisisComentario = data;
      }
    });
    console.log(this.RespuestaAnalisisComentario);
  }
}
