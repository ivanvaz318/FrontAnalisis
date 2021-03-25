import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnviarcomentarioComponent } from './components/forms/enviarcomentario/enviarcomentario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CardComponent } from './components/card/card.component';
import { ReportesComponent } from './components/reportes/reportes.component';

@NgModule({
  declarations: [
    EnviarcomentarioComponent,
    NavbarComponent,
    MenuComponent,
    ContenidoComponent,
    BreadcrumbComponent,
    CardComponent,
    ReportesComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [
    EnviarcomentarioComponent,
    FormsModule,
    ReactiveFormsModule,
    NavbarComponent,
    MenuComponent,
    ContenidoComponent,
    CardComponent
  ],
})
export class SharedModule {}
