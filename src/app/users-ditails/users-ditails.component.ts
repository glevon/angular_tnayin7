import { Component, OnInit } from '@angular/core';
import { UsersService, User } from '../users.service';
import {ActivatedRoute}  from '@angular/router'

@Component({
  selector: 'app-users-ditails',
  templateUrl: './users-ditails.component.html',
  styleUrls: ['./users-ditails.component.css']
})
export class UsersDitailsComponent implements OnInit {
  public userDetails: User

  constructor(private Route:ActivatedRoute ,private Users:UsersService) { }

  ngOnInit(): void {
    let id =parseInt(this.Route.snapshot.paramMap.get("k"))
    this.userDetails=this.Users.users.find(a=>a.id==id) 

  }

}
