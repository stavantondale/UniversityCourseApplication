import { APP_ID, Component, OnInit } from '@angular/core';

import { AdmissionCommitteeMember } from 'src/models/AdmissionCommitteeMember';
import { AdmissionCommitteeServiceService } from 'src/services/admission-committee-service.service';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-update-member',
  templateUrl: './update-member.component.html',
  styleUrls: ['./update-member.component.css']
})
export class UpdateMemberComponent implements OnInit {
  // fullname:string='';
  // mailcontact:string='';
  // username:string='';
  // password:string='';
  member: AdmissionCommitteeMember;
  constructor(private admissionCommitteeMemberService:AdmissionCommitteeServiceService, private loginService:LoginService) { }

  ngOnInit(): void {
    
    this.getInfo();
  }
  login(registerForm: {adminName:string,adminContact:string,userName:string,password:string}) {
    //alert("Entered Email id : " + data.emailid);
   }
     
   handleSucessfulResponse(response){
    this.member=response;
    this.member.user.password="";
  }
  getInfo() {
    this.admissionCommitteeMemberService.getMemberInfo().subscribe(data=>{
       console.log(data);
       console.log("member Info Received!!");
       this.handleSucessfulResponse(data);
       
     })
  }

  update()
  { 
    
    this.admissionCommitteeMemberService.updatemember(this.member).subscribe(data=>{
      console.log("update initiated!!!");
      alert("update Successfully!!!");
    this.loginService.logOut();
    })
  }
}
