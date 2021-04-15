import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/services/variables.service';
import { ConsultarreporteService } from '../../servicesshared/consultarreporte.service';
import { Router } from '@angular/router';
import { RespuestaGra } from '../../models/respuestaGraficas.model';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css'],
})
export class ReportesComponent implements OnInit {
 
  products:any;
  selectedProducts: [];
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
        this.products=value;
      }
    });
  }

  ngOnInit() {
    this.consultarReporte.consultaReporte();
    this.cols = [
      { field: 'NombreReporte', header: 'Nombre' },
      { field: 'confidence', header: 'Confidence' },
      { field: 'Comentario', header: 'Comentarios' },
      { field: 'FechaAnalisis',header: 'FechaAnalisis' }

  ];

  this.exportColumns = this.cols.map(col => ({title: col.header, dataKey: col.field}));
  }

  exportPdf() {
    import("jspdf").then(jsPDF => {
        import("jspdf-autotable").then(x => {
          const doc = new jsPDF.default('p','pt')
          doc['autoTable'](this.exportColumns, this.products);
            doc.save('products.pdf');
        })
    })
}

  verGrafica(rowData){
  this.VariablesGL.resAnalisis.next(rowData);
  this.router.navigate(['/graficas'], { replaceUrl: true });


}
}
