import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  SERVER_URL = "http://localhost:8080/login";

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private _router: Router) {
  }

  ngOnInit(): void {
    ;
  }

  onSubmit(data: any) {
    let redirect1: String;
    redirect1 = "";
    let formData = new FormData();
    formData.append("username", data.userName);
    formData.append("password", data.password);
    this.httpClient.post(this.SERVER_URL, formData, {observe: 'response'}).subscribe(
      (pos: any) => {
        console.log(pos);
        if (pos.status == 200) {
          if (pos.body.username == "admin") {
            console.log("welcome admin");
            this._router.navigate(['admin']);
          } else {
            console.log("welcome " + pos.body.username);
            this._router.navigate(['user']);
          }
        } else {
          alert("invalid credentials");

        }
      })


  }
}
