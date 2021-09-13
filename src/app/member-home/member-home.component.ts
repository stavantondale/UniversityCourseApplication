import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdmissionCommitteeMember } from 'src/models/AdmissionCommitteeMember';
import { AdmissionCommitteeServiceService } from 'src/services/admission-committee-service.service';

@Component({
  selector: 'app-member-home',
  templateUrl: './member-home.component.html',
  styleUrls: ['./member-home.component.css']
})
export class MemberHomeComponent implements OnInit {
  member=AdmissionCommitteeMember;
  adminName=sessionStorage.getItem('username');
  constructor( private admissionService: AdmissionCommitteeServiceService ,private router: Router){ }

  // handleResponse(member){
  //   this.adminName=member.adminName;
  // }
  toAdmission(){
    this.router.navigate(['/viewAdmissions']);
  }
  toContacts(){
    this.router.navigate(['/viewAllMembers']);
  }
  toAdd(){
    this.router.navigate(['/addCommitteeMember']);
  }
  toUpdate(){
    this.router.navigate(['/updateCommitteeMember']);
  }
  ngOnInit(): void {
    // this.admissionService.getMemberInfo().subscribe(data=>{
    // this.handleResponse(data);
    // })
  }

}
