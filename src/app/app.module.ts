import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutesModule } from 'src/config/routes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

//Modules
import { PagesModule } from './pages/pages.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    RoutesModule, 
    PagesModule, 
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
