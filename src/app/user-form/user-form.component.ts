import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service'
import { User } from '../Models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  user: User;

  constructor(
      private router: Router,
      private userService: UserService) {
    this.user = new User();
  }


  onSubmit() {
    this.userService.createUserDetails(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }
}
