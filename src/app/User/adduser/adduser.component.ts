import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../Model/user';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css'
})
export class AdduserComponent {


  user: User = new User();

  constructor(private userservice: UserService , private route: ActivatedRoute , private router: Router)
  {}

  onSubmit() {

const newuser:User = {
  
  // Add more attributes as needed
  userId: this.user.userId,
  firstName: this.user.firstName,
  lastName: this.user.lastName,
  password: this.user.password,
  email: this.user.email,
  image: this.user.image,
  gender: this.user.gender, 
  role: this.user.role,
  skillRate: this.user.skillRate
};
this.userservice.addUser(newuser)
.subscribe(data =>{
  this.userlist();
},error => console.log(error));
console.log(this.user.userId);
console.log(this.user);
}

userlist() {
  this.router.navigate(['/usersDetails'])
}
}


