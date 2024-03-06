import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './User/user-details/user-details.component';
import { AdduserComponent } from './User/adduser/adduser.component';
import { UpdateUserComponent } from './User/update-user/update-user.component';
import { LoginComponent } from './User/login/login.component';
import { AuthGuard } from './Guard/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login
  { path: 'login', component: LoginComponent },
  { path: 'userDetails', component: UserDetailsComponent, canActivate: [AuthGuard] },
  { path: 'adduser', component: AdduserComponent, canActivate: [AuthGuard] },
  { path: 'updateUser/:id', component: UpdateUserComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }