import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';
import {
  RespuestaGra,
  Agreement,
  Irony,
} from '../../models/respuestaGraficas.model';
import { AnalizarcomentarioService } from '../../servicesshared/analizarcomentario.service';

import ChartDataLabels from 'chartjs-plugin-datalabels';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css'],
})
export class GraficaComponent {
  //Region Variables
  respuestaGraficas: RespuestaGra;
  score_Tag: number[] = [];
  AGREEMENT: number[] = [];
  Subjectivity: number[] = [];
  Irony: number[] = [];
  Confidence:number[]=[];


  //Region Config de graficas
  public ChartOptions: ChartOptions = {
    legend: {
      display: true,
      position: 'bottom',
    },
  };
  public Score_TagChartLabels: Label[] = [
    'Positivo',
    'Neutro',
    'Negativo',
    'Ninguno',
  ];
  public AGREEMENTChartLabels: Label[] = ['Acuerdo', 'Desacuerdo'];
  public SubjectivityChartLabels: Label[] = ['Objetivo', 'Subjetivo'];
  public IronyChartLabels: Label[] = ['Sin Ironia', 'Ironia'];

  public Score_TagChartData: MultiDataSet = [this.score_Tag];
  public AGREEMENTChartData: MultiDataSet = [this.AGREEMENT];
  public SubjectivityChartData: MultiDataSet = [this.Subjectivity];
  public IronyChartData: MultiDataSet = [this.Irony];

  public Score_Tagcolors: Color[] = [
    { backgroundColor: ['#53e07d', '#d2e557', '#c62137', '#8e8e8e'] },
  ];
  public AGREEMENTcolors: Color[] = [
    { backgroundColor: ['#53e07d', '#e88b12'] },
  ];
  public Subjectivitycolors: Color[] = [
    { backgroundColor: ['#28a4ed', '#954ce8'] },
  ];
  public Ironycolors: Color[] = [{ backgroundColor: ['#a4d5f2', '#f9e825'] }];

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = [['Confianza'], ['Margen de error']];
  public pieChartData: number[] =this.Confidence;
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(0,255,0,0.3)','rgba(255,0,0,0.3)', ],
    },
  ];
  
  constructor(
    private analisis: AnalizarcomentarioService,
    private router: Router
  ) {
    this.analisis.resAnalisis.subscribe((value) => {
      if (value) {
        console.log(value);

        this.respuestaGraficas = value;
      }
      if (value == null) {
        this.router.navigate(['/analizar'], { replaceUrl: true });
      }
    });
  }

  ngOnInit() {
    this.llenaVectores();
  }
  llenaVectores() {
    this.score_Tag.push(
      this.respuestaGraficas.score_tag.positivo,
      this.respuestaGraficas.score_tag.neutro,
      this.respuestaGraficas.score_tag.negativo,
      this.respuestaGraficas.score_tag.none
    );

    this.AGREEMENT.push(
      this.respuestaGraficas.agreement.AGREEMENT,
      this.respuestaGraficas.agreement.DISAGREEMENT
    );

    this.Subjectivity.push(
      this.respuestaGraficas.subjectivity.OBJECTIVE,
      this.respuestaGraficas.subjectivity.SUBJECTIVE
    );

    this.Irony.push(
      this.respuestaGraficas.irony.NONIRONIC,
      this.respuestaGraficas.irony.IRONIC
    );
    
    this.Confidence.push(
      this.respuestaGraficas.confidence,
      (100-this.respuestaGraficas.confidence)
    );


  }
  
}
