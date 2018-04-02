import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from "@angular/common/http";
import { IonicPage } from "ionic-angular"
import { LoginSer } from "./login.ser"

@IonicPage({
  name: "login",
  segment: "login"
})

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(
    private loginSer: LoginSer
  ) { }

  ngOnInit() {

  }

  login() {
    this.loginSer.findOrganizationTree().subscribe(
      (event) => {
        if (event.type === HttpEventType.UploadProgress) {
          // This is an upload progress event. Compute and show the % done:
          const percentDone = Math.round(100 * event['loaded'] / event['total']);
          console.log(`File is ${percentDone}% uploaded.`);
        } else if (event instanceof HttpResponse) {
          console.log('File is completely uploaded!', event);
        }
      },
      ()=>{})
  }

}
