import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
username:string;
  constructor(private loginService:LoginService) {
    
   }

  ngOnInit(): void {
    
  }
 
  isUserLoggedIn():boolean{
    let isLoggedIn= this.loginService.isUserLoggedIn();
    if(isLoggedIn){
      this.username=sessionStorage.getItem("username");
    }
    return isLoggedIn;
  }

  isApplicant():boolean{
    return this.loginService.isApplicant();
  }

  isAdmissionCommitteeMember():boolean{
    return this.loginService.isAdmissionCommitteeMember();
  }

  isUniversityStaff():boolean{
    return this.loginService.isUniversityStaff();
  }
  
}

