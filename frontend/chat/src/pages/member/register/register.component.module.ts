import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"
import { IonicPageModule } from 'ionic-angular';
import { RegisterComponent } from "./register.component"
import { MemberSer } from "../member.ser"

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    HttpClientModule,
    IonicPageModule.forChild(RegisterComponent)
  ],
  entryComponents: [
    RegisterComponent
  ],
  providers: [
    MemberSer
  ]
})
export class LoginModule { }
