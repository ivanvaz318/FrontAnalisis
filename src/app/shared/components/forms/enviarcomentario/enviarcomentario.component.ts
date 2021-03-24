import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comentarios, Comentario } from '../../../models/comentarios.models';
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
          Validators.maxLength(500),
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
    }
  }

  quitar(Comentario) {
    console.log(Comentario);

    var i = this.comentarios.indexOf(Comentario);
    if (i !== -1) {
      this.comentarios.splice(i, 1);
    }
  }

  enviarcomentario() {
    if (this.comentarios.length > 0) {
      this.analizarcomentario.enviarcomentario(this.comentarios);
    }
  }
}
