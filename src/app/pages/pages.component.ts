import { Component, HostListener, OnInit } from '@angular/core';
import { VariablesService } from '../services/variables.service';



//Animaciones
import { flipInXAnimation } from '../shared/animations/flipinX';
import { fadeAnimation } from '../shared/animations/fade';
import { SlideAnimation } from '../shared/animations/slide';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
  animations: [flipInXAnimation, fadeAnimation, SlideAnimation],
})
export class PagesComponent implements OnInit {

  bandera=true;
  btnmenu:boolean;
  mostrarSideUser: boolean;
  mostrarLoading: boolean=false;
  
  contador: number = 0;
  constructor(
    private variablesGL:VariablesService,
    private authServi: AuthService,
  ) { 
   
      this.variablesGL.btnmenu.subscribe( value=>{this.btnmenu=value;});
      this.variablesGL.showSideUser.subscribe(value => {this.mostrarSideUser = value;});
      this.variablesGL.mostrarLoading.subscribe(value=> {this.mostrarLoading = value;});

  }

  ngOnInit(){
    this.variablesGL.btnmenu.subscribe();
    this.authServi.getUser();
}


clickSides($event: Event) {
  $event.preventDefault(); // Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo
  $event.stopPropagation();  // Evita la propagación adicional del evento actual en las fases de captura y bubbling
}

@HostListener('document:click', ['$event']) clickedOutside($event) {
  if (this.mostrarSideUser && this.contador == 0) {
    this.mostrarSideUser = true;
    this.contador++;
 
  }
  else if (this.mostrarSideUser && this.contador == 1) {
   
    
    this.emptySides();
  }
}



emptySides() {
  this.mostrarSideUser = false;
  this.contador = 0;
}

}