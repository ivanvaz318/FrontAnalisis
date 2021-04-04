import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { VariablesService } from 'src/app/services/variables.service';

@Component({
  selector: 'app-side-user',
  templateUrl: './side-user.component.html',
  styleUrls: ['./side-user.component.css']
})
export class SideUserComponent implements OnInit, OnDestroy {

  nombre: string;
  apellido: string;
  email: string;

  constructor(
    private variablesGL: VariablesService,
    private authServi: AuthService,
  ) {
    
    this.authServi.User.subscribe(
      (value) => {
        this.nombre = value.Nombre;
        this.apellido = value.ApellidoPaterno;
        this.email = value.Email;
      }

    );

  }

  ngOnInit() {

     
  }
  ngOnDestroy() {
    this.variablesGL.showSideUser.next(false);

  }

  cerrarSesion() {

    this.authServi.getcerrarSesion();

  }
}
