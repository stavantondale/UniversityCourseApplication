import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdmissionCommitteeMember } from 'src/models/AdmissionCommitteeMember';
import { Role } from 'src/models/Role';
import { AdmissionCommitteeServiceService } from 'src/services/admission-committee-service.service'; 
// import { MemberHomeComponent } from '../member-home/member-home.component';
@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {
  alert : boolean = false;
  member : AdmissionCommitteeMember={
    adminId:0,
    adminName:"",
    adminContact:"",
    user:{
      username: "",
      password: "",
      userId :0,
      role:Role.ADMISSIONCOMMITTEEMEMBER
    }
  }
  state: boolean;
  // message!: string;
  constructor(private admissionCommitteeMemberService:AdmissionCommitteeServiceService,private router: Router) { }
  ngOnInit(): void {
  }

 // title = 'Angular6App2';
 togglePassword(){
  if(this.state){
    document.getElementById("pwd").setAttribute("type","password");
    this.state =false;
  }else{
    document.getElementById("pwd").setAttribute("type","text");
    this.state =true;
  }
}
  login() {
   this.alert=true;
   console.log(this.member);
    this.admissionCommitteeMemberService.addmember(this.member).subscribe(data=>{
      console.log(data);
      alert("member added!!");
      this.router.navigate(['/login'])
    },
    error=>{
        if(error.status==406)
          alert(error.error.message);
      })

    //alert("Entered Email id : " + data.emailid);
  }
}
