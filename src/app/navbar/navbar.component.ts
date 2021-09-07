import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }
 
  isUserLoggedIn():boolean{
    return this.loginService.isUserLoggedIn();
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
