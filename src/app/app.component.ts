import { Component } from '@angular/core';
import { AppService } from './services/app.service';
import { fadeAnimation } from './shared/animations/fade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Analisis';
 
  constructor(appService:AppService,
    ){
    }
}
