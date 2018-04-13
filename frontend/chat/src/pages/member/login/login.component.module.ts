import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"
import { IonicPageModule } from 'ionic-angular';

import { LoginComponent } from "./login.component"
import { MemberSer } from "../member.ser"

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    IonicPageModule.forChild(LoginComponent)
  ],
  entryComponents: [
    LoginComponent
  ],
  providers: [
    MemberSer
  ]
})
export class LoginModule { }
