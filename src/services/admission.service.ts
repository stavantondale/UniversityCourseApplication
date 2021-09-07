import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdmissionDTO } from 'src/models/AdmissionDTO';

@Injectable({
  providedIn: 'root'
})
export class AdmissionService {
  private baseUrl:string = 'http://localhost:8590/Admission/'
  constructor(private httpService:HttpClient) { }

  viewAdmissionsByDate(date){
    return this.httpService.get<AdmissionDTO>(this.baseUrl+'getAdmissionsByDate/'+date);
  }

  viewAdmissionsByCourse(courseId:number){
    return this.httpService.get<AdmissionDTO>(this.baseUrl+'getAdmissionsByCourseId/'+courseId);
  }
}
