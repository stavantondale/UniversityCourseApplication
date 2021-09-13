import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/models/Role';
import { User } from 'src/models/User';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private myService: LoginService, private router: Router) {
    
    
  }
  
  
  user: User = new User(1, 'rutuja', 'Rutujs', Role.UNIVERSITYSTAFFMEMBER)
  invalidLogin = false;
  message: string;
  
  state=false;
  submitted = false;
  
  error: string = "";
  ngOnInit() {
    
  }

  togglePassword(){
    if(this.state){
      document.getElementById("pwd").setAttribute("type","password");
      this.state =false;
    }else{
      document.getElementById("pwd").setAttribute("type","text");
      this.state =true;
    }
  }
  

  login(loginForm) {

    (this.myService.authenticate(loginForm.username, loginForm.password).subscribe(
      data => {
        this.invalidLogin = false
        if(sessionStorage.getItem('role')==Role.APPLICANT.toString()){
          this.router.navigate(['/homeApplicant']);
        }
          
        else if(sessionStorage.getItem('role')===Role.UNIVERSITYSTAFFMEMBER.toString()){
          this.router.navigate(['/staffMemberHomePage']);
        }
         
        else if(sessionStorage.getItem('role')===Role.ADMISSIONCOMMITTEEMEMBER.toString()){
          this.router.navigate(['/memberHome']);
        }
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
  




  /* createForm() {
    this.myForm = this.fb.group({
       username: ['', Validators.required ]
    });
  }*/


}




//Observable,Promise