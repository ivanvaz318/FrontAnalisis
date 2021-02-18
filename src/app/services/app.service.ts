import { Injectable } from '@angular/core';
import { filter } from "rxjs/operators";
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { ConfigService } from '../../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private auth: AuthService,
    private router: Router,
    private config: ConfigService
  ) {
    this.config.setLocal();
    this.router.events
      .pipe(filter(d => d instanceof NavigationEnd))
      .subscribe((d: any) => {
        if (d.url == '/') {
          if (this.auth.User.value ==null) {
            this.auth
          }
         }
      })
  }
}

