import { Component, OnInit } from '@angular/core';
import { VariablesService } from '../services/variables.service';
import { AnalizarcomentarioService } from '../shared/servicesshared/analizarcomentario.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  bandera=true;
  btnmenu:boolean;
  constructor(
    private analisis:AnalizarcomentarioService,
    private variablesGL:VariablesService 
  ) { 
    this.analisis.resAnalisis
      .subscribe( value=>{
        if (value) {
          this.bandera=false;
        }
      }
       
      );
      this.variablesGL.btnmenu
      .subscribe( value=>{
          this.btnmenu=value;
             }
       
      );
    
  }

  ngOnInit(){
    this.variablesGL.btnmenu.subscribe();

}

}