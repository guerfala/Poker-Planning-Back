import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './User/user-details/user-details.component';
import { AdduserComponent } from './User/adduser/adduser.component';
import { UpdateUserComponent } from './User/update-user/update-user.component';
import { LoginComponent } from './User/login/login.component';
import { AuthGuard } from './Guard/auth.guard';
import {PaksListComponent} from "./paks-list/paks-list.component";
import {CardListComponent} from "./card-list/card-list.component";
import {AddPackComponent} from "./add-pack/add-pack.component";
import {EditPackComponent} from "./edit-pack/edit-pack.component";
import {AddCardComponent} from "./add-card/add-card.component";
import {EditCardComponent} from "./edit-card/edit-card.component";


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login
  { path: 'login', component: LoginComponent },
  { path: 'userDetails', component: UserDetailsComponent, canActivate: [AuthGuard] },
  { path: 'adduser', component: AdduserComponent, canActivate: [AuthGuard] },
  { path: 'updateUser/:id', component: UpdateUserComponent, canActivate: [AuthGuard] },
  {path: 'list-pack', component: PaksListComponent},
  {path: 'list-card', component: CardListComponent},

  {path: 'create-pack', component: AddPackComponent},
  {path: 'update-pack/:id', component: EditPackComponent},
  {path: 'add-card/:id', component: AddCardComponent},
  {path: 'update-card/:id', component: EditCardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
