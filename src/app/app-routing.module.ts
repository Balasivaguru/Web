import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router'
import { ScrollitemComponent } from './scrollitem/scrollitem.component';
import { AppComponent } from './app.component';



const routes: Routes =[
  { path: '', redirectTo: "login", pathMatch: 'full' },
  {path:'logins',component:ScrollitemComponent},
  {path:"bala",component:AppComponent}
 
  
];
@NgModule({
  declarations:[ScrollitemComponent],
  imports:[RouterModule.forRoot(routes)],
  exports:[ RouterModule]
})
 

export class AppRoutingModule { }
