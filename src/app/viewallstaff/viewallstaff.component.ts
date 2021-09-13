import { Component, OnInit } from '@angular/core';
import { UniversityStaffMember } from 'src/models/UniversityStaffMember';
import { UniversitystaffmemberService } from 'src/services/universitystaffmember.service';

@Component({
  selector: 'app-viewallstaff',
  templateUrl: './viewallstaff.component.html',
  styleUrls: ['./viewallstaff.component.css']
})
export class ViewallstaffComponent implements OnInit {
  staffMembers:UniversityStaffMember[]=[];
  constructor( private staffService:UniversitystaffmemberService) { }

  ngOnInit(): void {
   this.getAllStaffList();
  }
  handleData(data){
    this.staffMembers=data;
  }
  getAllStaffList(){
    this.staffService.viewAllUniversityStaffMember().subscribe(
      data=>{
        this.handleData(data);
      });
  }

  delete(staff:UniversityStaffMember){
    const confirmation=confirm("Are you sure you want to delete?");
    if(confirmation){
      this.staffService.removeUniversityStaff(staff.staffId).subscribe(
        data=>{
          alert("Deleted Successfully");
          this.getAllStaffList();
      })
    }
     
  }
}
