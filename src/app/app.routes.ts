import {Routes} from '@angular/router';
import {LoginComponent} from "./features/auth/login/login.component";
import {RegisterComponent} from "./features/auth/register/register.component";
import {ForgotPasswordComponent} from "./features/auth/forgot-password/forgot-password.component";
import { ProfileComponent } from './features/job-seeker/profile/profile.component';

export const routes: Routes = [
  {
    path: 'auth',
    children: [
      {path: '', component: LoginComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'forgot-password', component: ForgotPasswordComponent}
    ]
  },
  { path: 'profile', component: ProfileComponent }

];
