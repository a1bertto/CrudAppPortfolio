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
  userId: number ;

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {


  }

  onSubmit(){
  this.userService.getUserById(this.userId).subscribe((response)=>{
    this.user= response['data'];

  })}


 }




