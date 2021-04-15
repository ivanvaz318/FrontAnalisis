import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrarUsuario } from 'src/app/models/registrarUsuario.model';
import { RegistrarusuarioService } from '../../services/registrarusuario.service';

@Component({
  selector: 'app-registrarusuario',
  templateUrl: './registrarusuario.component.html',
  styleUrls: ['./registrarusuario.component.css']
})
export class RegistrarusuarioComponent implements OnInit {

  form: FormGroup;
  submitted: boolean = false;
  


  constructor(
    private fb: FormBuilder,
    private SRegistraUser: RegistrarusuarioService
  ) {}

  ngOnInit(){
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      AP:['', [Validators.required,Validators.minLength(3)]],
      AM:['', [Validators.required, Validators.minLength(3)]],
      correo: ['', [Validators.required]],
      contrasena: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get f() {
    return JSON.stringify(this.form.controls);
  }

  onSubmit(){
    this.submitted = true;
    if (this.form.invalid) {
      return;
    } else {
       let datosUsuario = new RegistrarUsuario(
        this.form.value.nombre,
        this.form.value.AP,
        this.form.value.AM,
        this.form.value.correo,
        this.form.value.contrasena
      );
     //this.SAuth.login(credenciales);
    console.log(datosUsuario);
    
    this.SRegistraUser.registraUsuario(datosUsuario);

      this.submitted=false;
    }
  }

  registrar(){
  }

}
