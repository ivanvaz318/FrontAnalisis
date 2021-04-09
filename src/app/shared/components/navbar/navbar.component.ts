import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/services/variables.service';
import { fadeAnimation } from 'src/app/shared/animations/fade';
import { flipInXAnimation } from '../../animations/flipinX';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [flipInXAnimation]
})
export class NavbarComponent implements OnInit {

  btnmenu:boolean=false;
  constructor(
    private variableGL:VariablesService
  ) {

    this.variableGL.btnmenu.subscribe(value=>{
      if (value) {
        this.btnmenu=value; 
      }
    });
   }

  ngOnInit() {
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

  changeSideUser() {
    this.variableGL.showSideUser.next(true);
  }

}
