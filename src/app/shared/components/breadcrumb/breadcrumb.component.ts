import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { VariablesService } from 'src/app/services/variables.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  titulo: string = '';
  path: string = '';

  constructor(
    public variablesGL: VariablesService,
    private router: Router,
    public title: Title,
    public meta: Meta,
  ) {
    this.getDataRoute().subscribe(data => {
      this.titulo = data.data.titulo;
      this.path = data.routeConfig.path;
      this.variablesGL.pagina.next(data.data.titulo);
    });
   }

  ngOnInit() {
  }

  
  getDataRoute() {
    return this.router.events.pipe(filter(eve => eve instanceof ActivationEnd))
                             .pipe(filter((eve: ActivationEnd) => eve.snapshot.firstChild === null))
                             .pipe(map((eve: ActivationEnd) => eve.snapshot))
  }
}
