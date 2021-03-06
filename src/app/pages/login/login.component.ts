import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioLogin } from '../../models/usuarioLogin.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted: boolean = false;

  spiner: boolean = false;
  status: boolean = false;
  status2: boolean = false;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private SAuth: AuthService,
    private elem: ElementRef
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      correo: ['',[Validators.required]],
      contrasena: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  get f() {
    return JSON.stringify(this.form.controls);
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    } else {
      let credenciales = new UsuarioLogin(
        this.form.value.correo,
        this.form.value.contrasena
      );
    this.SAuth.login(credenciales);
    

      this.submitted=false;
    }
  }


  Animacion(){
      this.status = !this.status;    
  }
  Animacion2(){
    this.status2 = !this.status2;    
}
  

}

