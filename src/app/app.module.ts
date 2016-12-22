import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { RouterModule, Routes } from "@angular/router";
import { APP_BASE_HREF } from "@angular/common";
import { MaterialModule } from "@angular/material";


export const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'fibonacci', component: FibonacciComponent }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    FibonacciComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    routing
  ],
  providers: [
    [{provide: APP_BASE_HREF, useValue: '/'}]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
