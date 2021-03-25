import { Component, OnInit } from '@angular/core';
import { ConsultarreporteService } from '../../servicesshared/consultarreporte.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  constructor(
    private consultarReporte: ConsultarreporteService
  ) { }

  ngOnInit() {
    this.consultarReporte.consultaReporte();
  }

}
