import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from "ionic-angular"
import { HttpEventType, HttpResponse } from "@angular/common/http"
import { TabsPage } from "../../tabs/tabs"
import { FormBuilder, Validators, FormGroup } from "@angular/forms"
import { MemberSer } from "../member.ser"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})

@IonicPage({
  name: "register",
  segment: "register"
})
export class RegisterComponent implements OnInit {
  registerFormGroup: FormGroup;
  userName: string;
  pwd: string;
  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public memberSer: MemberSer
  ) {
    this.registerFormGroup = this.formBuilder.group({
      userName: [this.userName, Validators.compose([Validators.required])],
      pwd: [this.pwd, Validators.compose([Validators.required])],
    })
  }

  ngOnInit() {
  }

  register (val) {
    this.memberSer.register(val).subscribe(
      (event) => {
        if (event.type === HttpEventType.UploadProgress) {
          // This is an upload progress event. Compute and show the % done:
          const percentDone = Math.round(100 * event['loaded'] / event['total']);
          console.log(`File is ${percentDone}% uploaded.`);
        } else if (event instanceof HttpResponse) {
          if(event.body.status){
            this.navCtrl.push(TabsPage);
          }
          console.log('File is completely uploaded!', event);
        }
      },
      ()=>{})
    // this.navCtrl.push(TabsPage);
  }
}
