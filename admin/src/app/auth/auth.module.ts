import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AuthRoutes } from "./auth.route";
import { Config } from "../provider/config";
import { HttpService } from "../provider/http.service";
import { CookieService } from "angular2-cookie/core";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild(AuthRoutes)
  ],
  providers: [Config, HttpService, CookieService],
  declarations: [LoginComponent, RegisterComponent]
})
export class AuthModule { }
