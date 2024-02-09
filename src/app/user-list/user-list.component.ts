import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user';
import{UserService} from '../Services/user.service'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users:User[] ;

  constructor(private userService: UserService,private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {
    this.userService.getAllUserDetails().subscribe((data)=> this.users = data);
  }


  onDelete(user: User) {
    if (user && user.id) {
      this.userService.deleteUserById(user.id).subscribe(() => this.users = this.users.filter((u) => u.id !== user.id));
    }
  }


}



