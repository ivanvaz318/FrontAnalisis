import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/services/variables.service';
import { ConsultarreporteService } from '../../servicesshared/consultarreporte.service';
import { Router } from '@angular/router';
import { RespuestaGra, Irony, Score_tag } from '../../models/respuestaGraficas.model';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css'],
})
export class ReportesComponent implements OnInit {
 
  reporte:any;
  reportepdf = [];
  irony=[];
  agreement=[];
  score_tag=[];
  subjectivity=[];


  cols: any[];
  DataGraficas: RespuestaGra;
  exportColumns: any[];

  constructor(
    private consultarReporte: ConsultarreporteService,
    private VariablesGL:VariablesService,
    private router:Router
    ) {
    this.consultarReporte.Report.subscribe((value)=>{
      if (value) {
        this.llenarObjetos(value);
      }
    });
  }

  ngOnInit() {
    this.consultarReporte.consultaReporte();
 
    
    this.cols = [
      { field: 'NombreReporte', header: 'Nombre' },
      { field: 'Comentario', header: 'Comentarios' },
      { field: 'FechaAnalisis',header: 'Fecha' },
      { field: 'confidence', header: 'Confianza' },
      { field: 'irony',header: 'Ironia' },
      { field: 'NONIRONIC',header: 'Sin ironia' },
      { field: 'AGREEMENT',header: 'Acuerdo' },
      { field: 'DISAGREEMENT',header: 'Desacuerdo ' },
      { field: 'negativo',header: 'Negativo' },
      { field: 'positivo',header: 'Positivo' },
      { field: 'neutro',header: 'Neutro' },
      { field: 'none',header: 'Ninguno' },
      { field: 'OBJECTIVE',header: 'Objetivo' },
      { field: 'SUBJECTIVE',header: 'Subjetivo' }
    


  ];

  this.exportColumns = this.cols.map(col => ({title: col.header, dataKey: col.field}));
  }

  exportPdf() {
    import("jspdf").then(jsPDF => {
        import("jspdf-autotable").then(x => {
          const doc = new jsPDF.default('l','pt')
          doc['autoTable'](this.exportColumns, this.reportepdf);
            doc.save('reporte.pdf');
        })
    })
}

  verGrafica(rowData){

  this.VariablesGL.resAnalisis.next(rowData);
  this.router.navigate(['/graficas'], { replaceUrl: true });


}

llenarObjetos(value){
  this.reporte=value;
  this.reporte.forEach(element => {
    this.irony.push(element.irony);
    this.agreement.push(element.agreement);
    this.score_tag.push(element.score_tag);
    this.subjectivity.push(element.subjectivity);
  });

  for( let i = 0; i < this.reporte.length; i++){

    let  pdf={
      NombreReporte:this.reporte[i].NombreReporte,
      Comentario:this.reporte[i].Comentario,
      FechaAnalisis:this.reporte[i].FechaAnalisis,
      confidence:this.reporte[i].confidence,
      irony:this.irony[i].IRONIC,
      NONIRONIC:this.irony[i].NONIRONIC,
      AGREEMENT:this.agreement[i].AGREEMENT,
      DISAGREEMENT:this.agreement[i].DISAGREEMENT,
      negativo:this.score_tag[i].negativo,
      positivo:this.score_tag[i].neutro,
      neutro:this.score_tag[i].positivo,
      none:this.score_tag[i].none,
      OBJECTIVE:this.subjectivity[i].OBJECTIVE,
      SUBJECTIVE:this.subjectivity[i].SUBJECTIVE
    }
      this.reportepdf.push(pdf);
  }
}

}
