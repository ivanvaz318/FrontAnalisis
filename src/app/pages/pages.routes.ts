import { Routes, RouterModule } from "@angular/router";
import { PagesComponent } from './pages.component';
import { AuthGuard } from '../../config/auth.guard';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from './login/login.component';
import { ResultadoanalisisComponent } from './resultadoanalisis/resultadoanalisis.component';
import { RegistrarusuarioComponent } from './registrarusuario/registrarusuario.component';
import { EnviarcomentarioComponent } from '../shared/components/forms/enviarcomentario/enviarcomentario.component';
import { ReportesComponent } from '../shared/components/reportes/reportes.component';

const pagesRoutes: Routes=[
    {
        path:'',
        component: PagesComponent,
        canActivate: [AuthGuard],
        children: [
            {path: '', component: DashboardComponent, data: { titulo: 'Pagina de inicio'}},
            {path: 'resultado', component: ResultadoanalisisComponent, data: { titulo: 'Resultado del analisis'}},
            {path: 'analizar', component: EnviarcomentarioComponent, data: { titulo: 'analizar'}},
            {path: 'reportes', component: ReportesComponent, data: { titulo: 'reportes '}}


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
