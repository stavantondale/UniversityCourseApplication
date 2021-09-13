import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdmissionCommitteeMember } from 'src/models/AdmissionCommitteeMember';

@Injectable({
  providedIn: 'root'
})
export class AdmissionCommitteeServiceService {

  updateMember:AdmissionCommitteeMember;
  private base : string = 'http://localhost:8590/admissionCommitte/';
  constructor(private http : HttpClient) { }

  addmember(member : AdmissionCommitteeMember){
    console.log(member);
    return this.http.post(this.base + "addMember", member );
  }

  listmember(){
    return this.http.get(this.base + "getAllMembers");
  }

  deletemember(adminId:number){
    return this.http.delete(this.base + "deleteMember/" + adminId);
  }

  // update(updateMember:AdmissionCommitteeMember){
  //   this.updateMember=updateMember;
  // }

  // updateMethod(){
  //   return this.updateMember;
  // }
  updatemember(member: AdmissionCommitteeMember){
        return this.http.put(this.base + "updateMember", member);
  }

  getMemberInfo(){
    return this.http.get(this.base + "getMember/" + sessionStorage.getItem("Admission_Committee_member_Id"));
  }

}
