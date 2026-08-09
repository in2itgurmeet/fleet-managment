import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Landing } from './landing/landing';
import { Login } from './login/login';
import { Register } from './register/register';
import { CreateCompany } from './create-company/create-company';
import { PasswordRecovery } from './password-recovery/password-recovery';



const routes: Routes = [
  { path: '', component: Landing },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'create-company', component: CreateCompany },
  { path: 'password-recovery', component: PasswordRecovery }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
