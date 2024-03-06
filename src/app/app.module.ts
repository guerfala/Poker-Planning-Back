import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { UserDetailsComponent } from './User/user-details/user-details.component';
import { LoginComponent } from './User/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { AdduserComponent } from './User/adduser/adduser.component';
import { UpdateUserComponent } from './User/update-user/update-user.component';
import {EditPackComponent} from "./edit-pack/edit-pack.component";
import {AddPackComponent} from "./add-pack/add-pack.component";
import {PackComponent} from "./pack/pack.component";
import {PaksListComponent} from "./paks-list/paks-list.component";
import {CardListComponent} from "./card-list/card-list.component";
import {AddCardComponent} from "./add-card/add-card.component";
import {EditCardComponent} from "./edit-card/edit-card.component";
import {CardsofpackComponent} from "./cardsofpack/cardsofpack.component";







@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    LoginComponent,
    HeaderComponent,
    ProfileComponent,
    SidebarComponent,
    FooterComponent,
    BodyComponent,
    AdduserComponent,
    UpdateUserComponent,
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
    MatButtonModule,
    MatIconModule,
    MatSliderModule,
    MatSelectModule,
    MatDialogModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
    // provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
