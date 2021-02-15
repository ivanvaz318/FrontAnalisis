import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { LoginComponent } from '../app/pages/login/login.component';
import { PagesComponent } from "src/app/pages/pages.component";

@NgModule({
    imports:[CommonModule,RouterModule.forRoot([
        {path: 'Inicio', component: PagesComponent, data: {pagina: 'Inicio'}},
    ])],
    exports:[RouterModule]
})

export class RoutesModule {}

export const RouterComponents =[
   LoginComponent,
    PagesComponent
]