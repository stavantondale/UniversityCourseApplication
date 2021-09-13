import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { UniversityStaffMember } from 'src/models/UniversityStaffMember';
import { User } from 'src/models/User';
import { LoginService } from 'src/services/login.service';
import { UniversitystaffmemberService } from 'src/services/universitystaffmember.service';

@Component({
  selector: 'app-update-staff',
  templateUrl: './update-staff.component.html',
  styleUrls: ['./update-staff.component.css']
})
export class UpdateStaffComponent implements OnInit {
  
  universitystaffmember:UniversityStaffMember;
  user:User;

  constructor(private universityStaffService:UniversitystaffmemberService, private loginService:LoginService) { }
  
  ngOnInit(): void {
   this.getStaffById();
  }
  getStaffById(){
  let staffId = sessionStorage.getItem("University_Staff_Id");
  if(staffId){
    this.universityStaffService.viewByStaffId(Number.parseInt(staffId)).subscribe(
      data=>{
        this.handleReceiveData(data);
        
      }
    )
  }
  }
  handleReceiveData(data){
   this.universitystaffmember=data;
   console.log(this.universitystaffmember);
  }

  onSubmit(updateStaffForm:any){
    this.universityStaffService.updateUniversityStaff(this.universitystaffmember).subscribe(
      data=>{
        alert("Update Successfully");
        this.loginService.logOut();
      }
    )
    console.log(updateStaffForm);
  }
}
