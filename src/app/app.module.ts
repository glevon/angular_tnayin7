import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UsersService } from './users.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SeePostsComponent } from './see-posts/see-posts.component';
import { SeeUsersComponent } from './see-users/see-users.component';
import { SortByDatePipe } from './sort-by-date.pipe';
import { SortByfollowersPipe } from './sort-byfollowers.pipe';
import { UsersDitailsComponent } from './users-ditails/users-ditails.component';
import { SearchPipe } from './search.pipe';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SeePostsComponent,
    SeeUsersComponent,
    SortByDatePipe,
    SortByfollowersPipe,
    UsersDitailsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
