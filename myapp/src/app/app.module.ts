import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";

import { appRoutes } from "./app.route";
import { HomeComponent } from "./home/home.component";
import { UserComponent } from "./user/user.component";
import { Config} from "./provider/config";
import { HttpService } from "./provider/http.service";
import { HttpClientModule } from '@angular/common/http';
import { CommonRepoModule } from "./common-repo/common-repo.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    CommonRepoModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes,  { enableTracing: false }  )
  ],
  entryComponents: [
    AppComponent,
    HomeComponent,
    UserComponent
  ],
  providers: [Config, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
