import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from 'src/services/login.service';
import { Role } from 'src/models/Role';
import { User } from 'src/models/User';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }
  user: User = new User(1, '', '', null)
  invalidLogin = false;
  message: string;
  flag: any;
  @Input() error: string = "";
  ngOnInit() {
  }

  login(loginForm) {

    (this.loginService.authenticate(loginForm.username, loginForm.password).subscribe(
      data => {
        this.router.navigate([''])
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true
        this.error = error.message;

        // alert("Please enter valid username and password")
        this.message = "Please Enter valid username and password";
      }
    )
    );
  }
}