import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Comentario } from '../../../models/comentarios.models';
import { AnalizarcomentarioService } from '../../../servicesshared/analizarcomentario.service';

@Component({
  selector: 'app-enviarcomentario',
  templateUrl: './enviarcomentario.component.html',
  styleUrls: ['./enviarcomentario.component.css'],
})
export class EnviarcomentarioComponent implements OnInit {
  form: FormGroup;
  submitted: boolean = false;
  idcomentario: number = 1;

  comentarios = [];

  constructor(
    private fb: FormBuilder,
    private analizarcomentario: AnalizarcomentarioService
    
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      comentario: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(600),
        ],
      ],
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
      let com = new Comentario(this.idcomentario++, this.form.value.comentario);
      this.comentarios.push(com);      
      this.submitted = false;
      this.form.reset();
    }
  }

  quitar(Comentario) {

    Swal.fire({
      title: '¿Desea eliminar este comentario?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        
    var i = this.comentarios.indexOf(Comentario);
    if (i !== -1) {
      this.comentarios.splice(i, 1);
    }
        Swal.fire(
          'Comentario eliminado',
          '',
          'success'
        )
      }
    })


  }

  enviarcomentario() {
    if (this.comentarios.length > 0) {
      this.analizarcomentario.enviarcomentario(this.comentarios);
    }
  }

}
