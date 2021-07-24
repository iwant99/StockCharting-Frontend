import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{RouterModule,Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import{SignupComponent} from "./components/signup/signup.component";

const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent}
];


@NgModule({
  exports:[RouterModule],
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
