import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { GeneralDataComponent } from './general-data/general-data.component';
import { NacimientoComponent } from './nacimiento/nacimiento.component';

const routes: Routes = [
  { path: "", component: AppComponent, pathMatch: "full"},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'forget-password',component: ForgetPassComponent },
  { path: 'general-data', component: GeneralDataComponent},
  {path: 'nacimiento', component: NacimientoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
