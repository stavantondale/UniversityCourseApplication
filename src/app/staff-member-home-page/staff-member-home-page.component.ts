import { Component, OnInit } from '@angular/core';
import { UniversityStaffMember } from 'src/models/UniversityStaffMember';
import { UniversitystaffmemberService } from 'src/services/universitystaffmember.service';

@Component({
  selector: 'app-staff-member-home-page',
  templateUrl: './staff-member-home-page.component.html',
  styleUrls: ['./staff-member-home-page.component.css']
})
export class StaffMemberHomePageComponent implements OnInit {

  constructor(private universityStaffService:UniversitystaffmemberService) { }
  universityStaffMembers:number;
  committeeMembers:number;
  admissions:number;
  courses:number;

  ngOnInit(): void {
    this.getStats();
  }
  getStats(){
    this.universityStaffService.getStats().subscribe(
      data=>{
        this.handleResponse(data);
      }
    )
  }
  handleResponse(data){
     this.universityStaffMembers=data.UniversityStaffMember;
     this.committeeMembers= data.CommitteeMembers;
     this.admissions= data.Admissions;
     this.courses= data.Course;
  }
}
