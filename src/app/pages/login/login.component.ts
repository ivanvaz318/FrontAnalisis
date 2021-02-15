import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  //metodo para probar el login
  Iniciar(){
  console.log('hdd');
  
  localStorage.setItem('tk','sdsdsd');
  this.router.navigate(['/'], { replaceUrl: true})

}
}
