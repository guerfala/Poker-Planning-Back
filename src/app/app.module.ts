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
import { CreateTeamComponent } from './create-team/create-team.component';
import { TeamListComponent } from './team-list/team-list.component';
import { UpdateTeamComponent } from './update-team/update-team.component';
import { StarRatingComponent } from './star-rating/star-rating.component';






@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    LoginComponent,
    CreateTeamComponent,
    TeamListComponent,
    UpdateTeamComponent,
    StarRatingComponent,
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
