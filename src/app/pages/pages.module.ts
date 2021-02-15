import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//paginas
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PagesComponents } from "./pages.routes";

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        LoginComponent
    ],
    exports: [],
    imports:[PagesComponents]
})

export class PagesModule {}