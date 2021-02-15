import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutesModule } from 'src/config/routes.module';

import { AppComponent } from './app.component';

//Modules
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RoutesModule, PagesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
