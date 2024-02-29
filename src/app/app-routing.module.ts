import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VotesListComponent } from './vote/votes-list/votes-list.component';
import { BlankComponent } from './blank/blank.component';

const routes: Routes = [
  {path: '', component: BlankComponent},
  {path: 'vlist', component: VotesListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
