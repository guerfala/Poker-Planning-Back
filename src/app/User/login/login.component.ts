import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { AuthenticationService } from '../Services/authentication.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})




export class LoginComponent implements OnInit {

  constructor(private userService: UserService , private userAuthService:AuthenticationService , private router : Router) {}

  email: string = '';
  password: string = '';
  warningMessage: string = '';
  
  ngOnInit(): void {
   
  }

  login( loginForm:NgForm)
  { this.userService.login(loginForm.value).subscribe(
    (Response:any) => {
      const token = Response.token;
      const userData = Response.user;

      this.userAuthService.setTokenAndUser(token,userData);
      this.router.navigate(['/userDetails']);
   
      
    },
    (error) => {
      console.log(error);
      this.warningMessage = 'Invalid credentials. Please try again.';
    }
    );
  }
}

