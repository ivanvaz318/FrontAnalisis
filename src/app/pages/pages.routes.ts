import { Routes, RouterModule } from "@angular/router";
import { PagesComponent } from './pages.component';
import { AuthGuard } from '../../config/auth.guard';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from './login/login.component';
import { ResultadoanalisisComponent } from './resultadoanalisis/resultadoanalisis.component';
import { RegistrarusuarioComponent } from './registrarusuario/registrarusuario.component';

const pagesRoutes: Routes=[
    {
        path:'',
        component: PagesComponent,
        canActivate: [AuthGuard],
        children: [
            {path: '', component: DashboardComponent, data: { titulo: 'Pagina de inicio'}},
            {path: 'resultado', component: ResultadoanalisisComponent, data: { titulo: 'Resultado del analisis'}},

        ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'registrar',
        component: RegistrarusuarioComponent
    }
   
    
    
]
export const PagesComponents = RouterModule.forChild(pagesRoutes);
