import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admission } from 'src/models/Admission';
import { AdmissionDTO } from 'src/models/AdmissionDTO';

@Injectable({
  providedIn: 'root'
})
export class AdmissionService {
  private baseUrl:string = 'http://localhost:8590/Admission/'
  constructor(private httpService:HttpClient) { }

  viewAllAdmissions(){
    return this.httpService.get<AdmissionDTO>(this.baseUrl+'getAllAdmissions');
  }

  viewAdmissionsByDate(date){
    return this.httpService.get<AdmissionDTO>(this.baseUrl+'getAdmissionsByDate/'+date);
  }

  viewAdmissionsByCourse(courseId:number){
    return this.httpService.get<AdmissionDTO>(this.baseUrl+'getAdmissionsByCourseId/'+courseId);
  }
  totalCostByCourse(courseId:number){
    return this.httpService.get<AdmissionDTO>(this.baseUrl+'calculateTotalCost/'+courseId)
  }

  viewAdmissionByApplicant(applicantId:number){
    return this.httpService.get<AdmissionDTO>(this.baseUrl+'getAdmissionsByApplicant/'+applicantId);
  }

  confirmAdmission(admissionId:number){
    return this.httpService.get<Admission>(this.baseUrl+'confirmAdmission/'+admissionId);
  }
  rejectAdmission(admissionId:number){
    return this.httpService.get<Admission>(this.baseUrl+'cancelAdmission/'+admissionId);
  }
}
