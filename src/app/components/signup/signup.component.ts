import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  SERVER_URL = "http://localhost:8080/signup";
  headers = {'content-type': 'application/json'}

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private _router: Router) {
  }

  ngOnInit(): void {

  }

  onSubmit(data: any) {
    if (data.confirmpassword == data.password) {
      delete data.confirmpassword;
      this.httpClient.post(this.SERVER_URL, JSON.stringify(data), {
        'headers': this.headers,
        observe: 'response'
      }).subscribe(
        (pos) => {
          if (pos.status == 200)
            this._router.navigate(['login']);
        }
      );
    } else {
      alert("passwords don't match")
    }
  }

}
