import { NgModule } from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditPackComponent } from './edit-pack/edit-pack.component';
import { AddPackComponent } from './add-pack/add-pack.component';
import { PackComponent } from './pack/pack.component';
import {FormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {HttpClientModule} from "@angular/common/http";
import {MatButton, MatButtonModule} from "@angular/material/button";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {PaksListComponent} from "./paks-list/paks-list.component";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import { CardListComponent } from './card-list/card-list.component';
import { AddCardComponent } from './add-card/add-card.component';
import { EditCardComponent } from './edit-card/edit-card.component';
import {MatFormField} from "@angular/material/form-field";
import {MatSelect} from "@angular/material/select";
import { CardsofpackComponent } from './cardsofpack/cardsofpack.component';

@NgModule({
  declarations: [
    AppComponent,
    EditPackComponent,
    AddPackComponent,
    PackComponent,
    PaksListComponent,
    CardListComponent,
    AddCardComponent,
    EditCardComponent,
    CardsofpackComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatPaginatorModule,
    NgbModule,
    MatDividerModule,
    MatIconModule,
    MatButton,
    MatFormField,
    MatSelect
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
