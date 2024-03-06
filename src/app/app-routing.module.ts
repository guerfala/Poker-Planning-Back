import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PaksListComponent} from "./paks-list/paks-list.component";
import {AddPackComponent} from "./add-pack/add-pack.component";
import {EditPackComponent} from "./edit-pack/edit-pack.component";
import {AddCardComponent} from "./add-card/add-card.component";
import {CardListComponent} from "./card-list/card-list.component";
import {EditCardComponent} from "./edit-card/edit-card.component";

const routes: Routes = [
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
