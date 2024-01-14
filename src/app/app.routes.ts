import {Routes} from '@angular/router';
import {LoginComponent} from "./features/auth/login/login.component";
import {RegisterComponent} from "./features/auth/register/register.component";
import {ForgotPasswordComponent} from "./features/auth/forgot-password/forgot-password.component";

export const routes: Routes = [
  {
    path: 'auth',
    component: LoginComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'forgot-password', component: ForgotPasswordComponent},
    ]
  },

];
