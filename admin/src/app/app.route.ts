import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";

import { MenuComponent } from "./menu/menu.component";
import { HomeComponent } from "./home/home.component";
import { UserComponent } from "./user/user.component";

export const appRoutes = [
  {
    path: "",
    loadChildren: "./auth/auth.module#AuthModule"
  },
  {
    path: "menu",
    loadChildren: "./menu/menu.module#MenuModule"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "user",
    component: UserComponent
  }
];
