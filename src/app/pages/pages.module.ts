import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//modulos
import { SharedModule } from '../shared/shared.module';


//paginas
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PagesComponents } from "./pages.routes";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ResultadoanalisisComponent } from './resultadoanalisis/resultadoanalisis.component';
import { RegistrarusuarioComponent } from './registrarusuario/registrarusuario.component';


//animaciones

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        LoginComponent,
        ResultadoanalisisComponent,
        RegistrarusuarioComponent
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule],
    imports:[
        PagesComponents,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        SharedModule,
        BrowserAnimationsModule
        
    ]
})

export class PagesModule {}