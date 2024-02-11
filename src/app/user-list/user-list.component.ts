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
  showUpdateForm = false;
  userToUpdate:User;


  constructor(private userService: UserService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.userService.getAllUserDetails().subscribe((data)=> {this.users = data});
  }

  onDelete(user: User) {
    if (user && user.id) {
      this.userService.deleteUserById(user.id).subscribe(
        () => {

          this.userService.getAllUserDetails().subscribe((data)=> {this.users = data});
        }
      );
    }
  }
  onShowUpdateForm(user: User) {
    this.showUpdateForm = true;
    this.userToUpdate = { ...user }; // Create a copy of the user to avoid updating the original user directly
  }

  onHideUpdateForm() {
    this.showUpdateForm = false;
    this.userToUpdate = null;
  }

  onConfirmUpdate() {
    if (this.userToUpdate && this.userToUpdate.id) {
      this.userService.updateUserDetails(this.userToUpdate.id, this.userToUpdate).subscribe(() => {
        this.showUpdateForm = false;
        this.userToUpdate = null;
      });
    }
  }


  gotoUserList() {


  }

}



