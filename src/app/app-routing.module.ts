import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {SeePostsComponent} from './see-posts/see-posts.component'
import {SeeUsersComponent} from './see-users/see-users.component'
import { UsersDitailsComponent } from './users-ditails/users-ditails.component';

const routes: Routes = [
  {path:"",redirectTo:"/Home",pathMatch:"full"},
  {path:"Home",component:HomeComponent},
  {path:"SeePosts",component:SeePostsComponent},
  {path:"SeeUsers",component:SeeUsersComponent},
  {path:"SeeUsers/:k",component:UsersDitailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
