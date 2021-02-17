import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//modulos
import { SharedModule } from '../shared/shared/shared.module';


//paginas
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PagesComponents } from "./pages.routes";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        LoginComponent
    ],
    exports: [ReactiveFormsModule],
    imports:[
        PagesComponents,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        SharedModule
    ]
})

export class PagesModule {}