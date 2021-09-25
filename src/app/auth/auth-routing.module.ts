import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from "./layout/layout.component";
import { LoginComponent } from "./components/login/login.component";
import { AuthComponent } from "./components/auth/auth.component";

const routes: Routes = [
  {
    path: 'auth',
    component: LayoutComponent,
    children: [
      {
        path: 'login',
        component: AuthComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
