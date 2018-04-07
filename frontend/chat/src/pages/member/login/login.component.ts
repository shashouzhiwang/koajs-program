import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from "@angular/common/http";
import { IonicPage, NavController } from "ionic-angular"
import { FormBuilder, Validators, FormGroup } from "@angular/forms"
import { MemberSer } from "../member.ser"

@IonicPage({
  name: "login",
  segment: "login"
})

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  userName: string;
  pwd: string;
  constructor(
    private memberSer: MemberSer,
    private navCtrl: NavController,
    public formBuilder: FormBuilder
  ) {
    this.loginFormGroup = this.formBuilder.group({
      userName: [this.userName, Validators.compose([Validators.required])],
      pwd: [this.pwd, Validators.compose([Validators.required])],
    })
  }

  ngOnInit() {

  }

  login(val) {
    this.memberSer.findOrganizationTree(val).subscribe(
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

  register() {
    this.navCtrl.push('register');
  }

}
