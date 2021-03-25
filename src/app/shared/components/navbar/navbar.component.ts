import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/services/variables.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  btnmenu:boolean=false;
  constructor(
    private authServi: AuthService,
    private variableGL:VariablesService
  ) {

    this.variableGL.btnmenu.subscribe(value=>{
      if (value) {
        this.btnmenu=value; 
      }
    })
  
   }

  ngOnInit() {
  }

  cerrarSesion(){
    
    this.authServi.getcerrarSesion();
    
  }
  cambiarmenu(){

    
    if (this.btnmenu) {
      this.btnmenu=false;
    }
    else{
      this.btnmenu=true;
    }
   

this.variableGL.btnmenu.next(this.btnmenu);
  }
}
