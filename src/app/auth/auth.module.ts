import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { MaterialModule } from "../material/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { AuthComponent } from './components/auth/auth.component';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [
    LayoutComponent,
    LoginComponent,
    AuthComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule

  ]
})
export class AuthModule { }
