import { Component, OnInit } from '@angular/core';
import { AdmissionCommitteeMember } from 'src/models/AdmissionCommitteeMember';
import { AdmissionCommitteeServiceService } from 'src/services/admission-committee-service.service';

@Component({
  selector: 'app-list-member',
  templateUrl: './list-member.component.html',
  styleUrls: ['./list-member.component.css']
})
export class ListMemberComponent implements OnInit {

  memberlist:AdmissionCommitteeMember[]=[];
   constructor(private admissionCommitteeMemberService:AdmissionCommitteeServiceService) {

    }

  ngOnInit(): any {
    this.getAllMembers();
  }

  handleSucessfulResponse(response){
    this.memberlist=response;
  }

  getAllMembers(){
    this.admissionCommitteeMemberService.listmember().subscribe(
      response => this.handleSucessfulResponse(response),
    );
  }

  delete(deleteMember: AdmissionCommitteeMember){
    var aId:number=deleteMember.adminId;
    this.admissionCommitteeMemberService.deletemember(aId).subscribe(data=>{
      console.log(aId);
      console.log("member deleted!!");
      this.getAllMembers();
    })
  }
  // update(updateMember:AdmissionCommitteeMember){
  //   this.admissionCommitteeMemberService.update(updateMember);
    
  // }

  // emp:any[];
  // constructor(){
  //   this.emp=[
  //     {adminId:'emp101',adminName:"akash",adminContact:"ayz"},
  //     {adminId:'emp102',adminName:"pranay",adminContact:"ayz"},
  //     {adminId:'emp103',adminName:"shrikanth",adminContact:"ayz"},
  //     {adminId:'emp104',adminName:"deepa",adminContact:"ayz"},
  //     {adminId:'emp101',adminName:"ramya",adminContact:"ayz"}
  //   ]
  //}
}
