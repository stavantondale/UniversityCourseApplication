import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from 'src/models/User';
import { Role } from '../models/Role';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user:User;
  token=null;
  private baseUrl:string = 'http://localhost:8590/login/';
 headers_object = new HttpHeaders();
  constructor(private httpService: HttpClient) { }
  
  authenticate(username:any, password:any) {
    this.user=new User(1,username,password,Role.UNIVERSITYSTAFFMEMBER);
    this.user.username=username;
    this.user.password=password;
    return this.httpService
      .post<any>(this.baseUrl+"user", this.user)
      .pipe(map(userData => {
          sessionStorage.setItem("username", username);
          let tokenStr = "Bearer " + userData.token;
          sessionStorage.setItem("token", tokenStr);
          sessionStorage.setItem("role", userData.role);
          if(userData.role=="APPLICANT"){
            sessionStorage.setItem("Applicant_id", userData.applicantId);
          }else if(userData.role=="ADMISSIONCOMMITTEEMEMBER"){
            sessionStorage.setItem("Admission_Committee_member_Id", userData.adminId);
          }else if(userData.role=="UNIVERSITYSTAFFMEMBER"){
            sessionStorage.setItem("University_Staff_Id", userData.staffId);
          }
          return userData;
        })
      ); 
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem("username");
    return !(user === null);
  }
  logOut() {
    sessionStorage.removeItem("username");
    sessionStorage.clear();
  }

  isApplicant():boolean{
    let role = sessionStorage.getItem("role");
    if(role === "APPLICANT")
      return true;
    return false;
  }
  isAdmissionCommitteeMember():boolean{
    let role = sessionStorage.getItem("role");
    if(role === "ADMISSIONCOMMITTEEMEMBER")
      return true;
    return false;
  }
  isUniversityStaff():boolean{
    let role = sessionStorage.getItem("role");
    if(role === "UNIVERSITYSTAFFMEMBER")
      return true;
    return false;
  }
}
