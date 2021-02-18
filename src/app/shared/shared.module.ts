import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnviarcomentarioComponent } from './components/forms/enviarcomentario/enviarcomentario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RespuestaanalisisComponent } from './components/respuestaanalisis/respuestaanalisis.component';



@NgModule({
  declarations: [EnviarcomentarioComponent, RespuestaanalisisComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    EnviarcomentarioComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
