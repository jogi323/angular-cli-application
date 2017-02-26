import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { empListComponent } from './emp/emp-list.component';
import { empFilterPipe } from './emp/emp-filter.pipe';
import {starComponent} from './emp/star.component';
// const appRoutes: Routes = [
//   { path: 'emp-list', component: empListComponent },
//   // { path: '/home',      component: AppComponent }
//   ];

@NgModule({
  declarations: [
    AppComponent,
    empListComponent,
    empFilterPipe,
    starComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
