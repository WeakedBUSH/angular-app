import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SecretpageComponent } from './secretpage/secretpage.component';
import { AuthGuardService } from './_service/auth-guard.service';
const routes: Routes = [
  { path: '', component: HomeComponent , title: 'Accueil' },
  { path: 'Login', component: LoginComponent , title: 'Login' },
  { path: 'SecretPage', component: SecretpageComponent , canActivate: [AuthGuardService], title: '????????' },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
