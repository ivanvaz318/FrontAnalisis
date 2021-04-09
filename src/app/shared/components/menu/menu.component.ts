import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VariablesService } from 'src/app/services/variables.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  btnmenu:boolean=false;

  constructor(
    private router: Router,
    private variableGL:VariablesService

  ) { 
    
    this.variableGL.btnmenu.subscribe(value=>{
   
        this.btnmenu=value; 
          })
  }

  ngOnInit() {
    this.variableGL.btnmenu.subscribe();
  }

  navegar(){
    console.log("menu");
    
    this.router.navigate(['/analizar'], { replaceUrl: true });

  }

}
