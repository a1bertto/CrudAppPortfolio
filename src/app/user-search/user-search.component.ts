import { Component, OnInit } from '@angular/core';
import{UserService} from '../Services/user.service'
import { User } from '../Models/user';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  user:User;
  userId: number;

  constructor(private userService: UserService) { }

  ngOnInit(): void {


  }

  submitSearch(): void {
    if (this.userId) {
      this.fetchUserById(this.userId);
    } else {
      // Handle the case where the user ID is not valid or empty
      this.user = null;
    }
  }

  private fetchUserById(userId: number): void {
    if (userId) {
      this.userService.getUserById(userId).subscribe(
        (data) => {
          this.user = data;
          console.log("userid:"+data)
        },
        (error) => {
          console.error('Error fetching user:', error);
          // Handle the error as needed
        }
      );
    } else {
      // Handle the case where the user ID is not valid or empty
      this.user = null;
    }
  }


  }



