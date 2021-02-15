import { Routes, RouterModule } from "@angular/router";
import { PagesComponent } from './pages.component';
import { AuthGuard } from '../../config/auth.guard';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from './login/login.component';

const pagesRoutes: Routes=[
    {
        path:'',
        component: PagesComponent,
        canActivate: [AuthGuard],
        children: [
            {path: '', component: DashboardComponent, data: { titulo: 'Pagina de inicio'}}
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    }

    
]
export const PagesComponents = RouterModule.forChild(pagesRoutes);
