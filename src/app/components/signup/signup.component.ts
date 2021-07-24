import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from "@angular/forms";
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 SERVER_URL="http://localhost:8080/signup";
 headers={ 'content-type': 'application/json'}

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) {}

  ngOnInit(): void {
    }

  onSubmit(data:any){
   if (data.confirmpassword == data.password){
     delete data.confirmpassword;
    this.httpClient.post(this.SERVER_URL,JSON.stringify(data),{'headers':this.headers}).subscribe(
      (err) => console.log(err)
    );}
   else{
     alert("passwords don't match")
   }
  }

}
