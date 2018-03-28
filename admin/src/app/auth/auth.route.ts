import { RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

export const AuthRoutes = [
  {
    path: "",
    component: LoginComponent
  }
];
