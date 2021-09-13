import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UniversityStaffMember } from 'src/models/UniversityStaffMember';

@Injectable({
  providedIn: 'root'
})
export class UniversitystaffmemberService {
   private baseUrl:string = "http://localhost:8590/universitystaff/";
  constructor( private httpclient:HttpClient) { }
    addUniversityStaff(universitystaffmember:UniversityStaffMember){
    return this.httpclient.post(this.baseUrl + "UnviersityStaffCreation", universitystaffmember);
  }
 updateUniversityStaff(universitystaffmember:UniversityStaffMember){
   return this.httpclient.put(this.baseUrl + "UpdateStaff", universitystaffmember);
 }

 removeUniversityStaff(staffMemberId:number){
   return this.httpclient.delete(this.baseUrl + "universityRemovestaff/"+ staffMemberId );
 }
 viewAllUniversityStaffMember(){
   return this.httpclient.get<UniversityStaffMember>(this.baseUrl + "viewAllStaffs");
 }
 viewByStaffId(staffMemberId:number){
  return this.httpclient.get(this.baseUrl + "viewStaffById/" + staffMemberId);
 }
 getStats(){
   return this.httpclient.get(this.baseUrl + "getStatistics" );
 }
}
