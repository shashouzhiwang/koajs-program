import { NgModule, } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MenuComponent } from "./menu.component";
import { GoodsService } from "../common.server";
import { TestDirective } from "./test.directive";
import { TestPipe } from "./test.pipe";
import { MenuRoutes } from "./menu.route";
import { HttpModule } from "@angular/http";
import { Config } from "../provider/config";
import { HttpService } from "../provider/http.service";
import { CookieService } from "angular2-cookie/core";
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CommonRepoModule } from "../common-repo/common-repo.module";

@NgModule({
  imports: [
    CommonModule,
    CommonRepoModule,
    HttpModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    RouterModule.forChild(MenuRoutes)
  ],
  declarations: [
    MenuComponent,
    TestDirective,
    TestPipe],
  entryComponents: [
    MenuComponent,
  ],
  providers: [
    GoodsService,
    Config,
    HttpService,
    CookieService
  ]
})
export class MenuModule { }
