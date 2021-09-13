import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';
import { UniversitystaffmemberService } from 'src/services/universitystaffmember.service';

@Component({
  selector: 'app-remove-staff',
  templateUrl: './remove-staff.component.html',
  styleUrls: ['./remove-staff.component.css']
})
export class RemoveStaffComponent implements OnInit {

  constructor( private universityStaffService:UniversitystaffmemberService, private loginService:LoginService) { }

  ngOnInit(): void {
    let staffId = sessionStorage.getItem("University_Staff_Id");
    let confirmation= confirm("Are you sure?");
    if(confirmation){
      this.universityStaffService.removeUniversityStaff(Number.parseInt(staffId)).subscribe(
        data=>{
          alert("Deleted Successfully");
          this.loginService.logOut();
        }
      )
    }
  }

}
