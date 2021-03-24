import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnviarcomentarioComponent } from './components/forms/enviarcomentario/enviarcomentario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [EnviarcomentarioComponent, NavbarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    EnviarcomentarioComponent,
    FormsModule,
    ReactiveFormsModule,
    NavbarComponent
  ]
})
export class SharedModule { }
