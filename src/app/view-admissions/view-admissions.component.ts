import { Component, OnInit } from '@angular/core';
import { AdmissionDTO } from 'src/models/AdmissionDTO';
import { Course } from 'src/models/Course';
import { AdmissionService } from 'src/services/admission.service';
import { ApplicantService } from 'src/services/applicant.service';
import { CourseServiceService } from 'src/services/course-service.service';

@Component({
  selector: 'app-view-admissions',
  templateUrl: './view-admissions.component.html',
  styleUrls: ['./view-admissions.component.css']
})
export class ViewAdmissionsComponent implements OnInit {
  applications: AdmissionDTO[] = [];
  courses: Course[] = [];
  isTableDisplayed: boolean;
  filter1:string="";
  status1:string="";
  date1:Date;
  course1:string="";
  searchQuery:string;
  constructor(private admissionService: AdmissionService, private courseService: CourseServiceService, private applicantService:ApplicantService) {
  }

  ngOnInit(): void {
    this.getAdmissions();
  }

  getAdmissions() {
    this.admissionService.viewAllAdmissions().subscribe(
      data=>{
        this.handleReceivedData(data);
      },
      error=>{
        this.clearList();
      }
    )
  }
  clearList(){
    this.applications = [];
  }
  handleReceivedData(data) {
    this.applications = data;
    this.isTableDisplayed = true;
    this.searchQuery="";
  }

  onFilterChange(filter) {
    if (filter === 'course') {
      this.courseService.getAllCourse().subscribe(
        data => {
          this.handleCourseData(data);
        }
      )
    }
    if(filter===''){
      this.getAdmissions();
    }
  }

  handleCourseData(data) {
    this.courses = data;
  }
  
  searchByDate(date) {
    if (date) {
      this.isTableDisplayed = true;
      this.admissionService.viewAdmissionsByDate(date).subscribe(
        data => {
          this.handleReceivedData(data);
        },
        error => {
          this.clearData();
        });
    }
  }

  searchByCourse(courseId) {
    //console.log(courseId);
    if (courseId) {
      this.isTableDisplayed = true;
      this.admissionService.viewAdmissionsByCourse(courseId).subscribe(
        data => {
          this.handleReceivedData(data);
        },
        error => {
          this.clearData();
        });
    }
  }

  searchByStatus(status:string){
    if(status){
      this.applicantService.viewApplicantByStatus(status).subscribe(
        data=>{
          this.handleReceivedData(data);
        },
        error=>{
         this.clearData();
        }
      )
    }
  }
  confirmAdmission(admissionId:number){
    this.admissionService.confirmAdmission(admissionId).subscribe(
      data=>{
        alert("Admission confirmed of applicant");
        this.refershData();
      });
  }
  rejectAdmission(admissionId:number){
    this.admissionService.rejectAdmission(admissionId).subscribe(
      data=>{
        alert("Admission cancelled of applicant");
        this.refershData();
      },
      error=>{
        
      });
  }
  clearData(){
    this.applications = [];
    this.searchQuery="";
  }
  refershData(){
    if(this.filter1=='course'){
      if(this.course1)
        this.searchByCourse(this.course1);
    }
    else if(this.filter1=='date'){
      if(this.date1)
        this.searchByDate(this.date1);
    }
    else if(this.filter1=='status'){
      if(this.status1)
        this.searchByStatus(this.status1);
    }
    else{
      this.getAdmissions();
    }
  }

  
  column:any="applicant.applicantName";
  order:boolean=false;
  sort(column:string, order:boolean){
    console.log(column);
    this.column = column;
    if(this.column== column && this.order== order){
      this.order=order;
    }
    else{
      this.order=true;
    }
  }
}
