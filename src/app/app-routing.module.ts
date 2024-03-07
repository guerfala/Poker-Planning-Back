import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './User/user-details/user-details.component';
import { AdduserComponent } from './User/adduser/adduser.component';
import { CreateTeamComponent } from './create-team/create-team.component';
import { TeamListComponent } from './team-list/team-list.component';
import { UpdateTeamComponent } from './update-team/update-team.component';


const routes: Routes = [
  {path:'usersDetails', component:UserDetailsComponent},
  {path:'adduser', component:AdduserComponent},
  {path: 'create-team', component: CreateTeamComponent},
  {path: 'teams', component: TeamListComponent},
  {path: 'updateTeam/:id', component: UpdateTeamComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
