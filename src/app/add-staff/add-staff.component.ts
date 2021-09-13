import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/models/Role';
import { UniversityStaffMember } from 'src/models/UniversityStaffMember';
import { User } from 'src/models/User';
import { UniversitystaffmemberService } from 'src/services/universitystaffmember.service';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {
  
  universitystaffmember:UniversityStaffMember;
  user:User;

  constructor(private universityStaffService:UniversitystaffmemberService, private router:Router) { }
  isPasswordMatched:boolean;
  ngOnInit(): void {

  }
  onSubmit(addStaffForm:any){
    this.user = new User(0, addStaffForm.username, addStaffForm.password, Role.UNIVERSITYSTAFFMEMBER);
    this.universitystaffmember = new UniversityStaffMember(0, this.user );
    this.universityStaffService.addUniversityStaff(this.universitystaffmember).subscribe(
      data=>{
         alert("Staff Added Successfully");
         this.router.navigate(['/login']);
      },
      error=>{
        if(error.status==406)
          alert(error.error.message);
          
      }
    );
  }
  passwordMatchChecker(password, confirmPassword){
  if(password===confirmPassword){
    this.isPasswordMatched = true;
  }
  else
  this.isPasswordMatched = false;
  }
}
