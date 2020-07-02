import { Component, OnInit } from '@angular/core';
import { UsersService, User } from '../users.service';
import {Post} from '../users.service'
@Component({
  selector: 'app-see-posts',
  templateUrl: './see-posts.component.html',
  styleUrls: ['./see-posts.component.css']
})
export class SeePostsComponent implements OnInit {
  public posts:Post[]
  constructor(private Users:UsersService) { }

  ngOnInit(): void {
    this.posts = this.Users.getPosts()    
  }
}
