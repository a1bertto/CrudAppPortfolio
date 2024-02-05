import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user';
import{UserService} from '../Services/user.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users:User[] ;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUserDetails().subscribe((data)=> this.users = data);
  }
 

}
