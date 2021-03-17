import { Component, OnInit } from '@angular/core';
import { AnalizarcomentarioService } from '../shared/servicesshared/analizarcomentario.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  bandera=true;
  constructor(
    private analisis:AnalizarcomentarioService 
  ) { 
    this.analisis.resAnalisis
      .subscribe( value=>{
        if (value) {
          this.bandera=false;
        }
      }
       
      );
    
  }

  ngOnInit(){

}

}