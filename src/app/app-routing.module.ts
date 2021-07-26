import { NgModule } from '@angular/core';
import{RouterModule,Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import{SignupComponent} from "./components/signup/signup.component";
import {UserdashboardComponent} from "./components/userdashboard/userdashboard.component";
import {AdmindashboardComponent} from "./components/admindashboard/admindashboard.component";

const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'user',component:UserdashboardComponent},
  {path:'admin',component:AdmindashboardComponent}
];


@NgModule({
  exports:[RouterModule],
  declarations: [],
  imports: [RouterModule.forRoot(routes)]

})
export class AppRoutingModule { }
