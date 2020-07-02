import { Component, OnInit } from '@angular/core';
import { UsersService, User } from '../users.service';

@Component({
  selector: 'app-see-users',
  templateUrl: './see-users.component.html',
  styleUrls: ['./see-users.component.css']
})
export class SeeUsersComponent implements OnInit {
  public users:User[]=[]
  public inp:string

  constructor(private Users:UsersService) { }

  ngOnInit(): void {
    console.log(this.Users);
    this.users=this.Users.getUsers()
    
  }

}
