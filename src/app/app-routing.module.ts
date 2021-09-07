import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ViewAdmissionsComponent } from './view-admissions/view-admissions.component';

const routes: Routes = [
  { path:"login", component:LoginComponent },
  { path:"logout", component:LogoutComponent },
  {path:"viewAdmissions", component:ViewAdmissionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
