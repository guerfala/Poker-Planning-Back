import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './User/user-details/user-details.component';
import { AdduserComponent } from './User/adduser/adduser.component';
import { UpdateUserComponent } from './User/update-user/update-user.component';
import { LoginComponent } from './User/login/login.component';


const routes: Routes = [
  {path: ' ' , component:LoginComponent},
  {path:'userDetails', component:UserDetailsComponent},
  {path:'adduser', component:AdduserComponent},
  {path: 'updateUser/:id' , component:UpdateUserComponent}
 
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
