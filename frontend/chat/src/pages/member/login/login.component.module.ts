import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"
import { IonicPageModule } from 'ionic-angular';

import { LoginComponent } from "./login.component"

import { LoginSer } from "./login.ser"
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
    LoginSer
  ]
})
export class LoginModule { }
