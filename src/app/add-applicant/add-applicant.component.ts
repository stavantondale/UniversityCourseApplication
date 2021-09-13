import { Component, OnInit } from '@angular/core';
import { AdmissionStatus } from 'src/models/AdmissionStatus';
import { ActivatedRoute, Router } from '@angular/router';
import { Applicant } from 'src/models/Applicant';
import { Course } from 'src/models/Course';
import { Role } from 'src/models/Role';
import { ApplicantService } from 'src/services/applicant.service';
import { CourseServiceService } from 'src/services/course-service.service';

@Component({
  selector: 'app-add-applicant',
  templateUrl: './add-applicant.component.html',
  styleUrls: ['./add-applicant.component.css'],
  providers:[ApplicantService]
})
export class AddApplicantComponent implements OnInit {

  alert: boolean = false
  course:Course;
  courseId:any;
  
  applicant: Applicant= {
    applicantName: "",
    applicantDegree: "",
    mobileNumber: "",
    applicantGraduationPercent: 0,
    admission: {
      admissionId: 0,
      applicantId: 0,
      courseId: 0,
      admissionDate: new Date(Date.now()),
      status: AdmissionStatus.APPLIED
    },
    applicantId: 0,
    user: {
      username: "",
      password: "",
      userId:0,
      role:Role.APPLICANT
    },
    status: AdmissionStatus.APPLIED
  }
  isPasswordMatched: boolean;

  constructor( private route: ActivatedRoute,private applicantService:ApplicantService,private router:Router,private courseService:CourseServiceService ) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => this.courseId=params);
    this.getCourse(this.courseId);
  }
  handleSuccessfulResponse(response){
    this.course=response;
  }

  getCourse(courseId){
  //   console.log(courseId.courseId);
   this.courseService.getCourse(courseId.courseId).subscribe(data=>{
      this.handleSuccessfulResponse(data);
    },error=>{
      alert("Course not found with given id.");
      this.router.navigate(['/allCourse']);
    });
  
  }
  addApplicant() {
    this.applicant.admission.courseId=this.course.courseId;
    this.applicantService.addApplicant(this.applicant).subscribe(data => {
      alert("Your Applicantion has been submitted");
      this.router.navigate(['/login'])
    },
    error=>{
      if(error.status==406)
      alert(error.error.message);
    })
    
  }
  closeAlert() {
    this.alert = false
  }

  passwordMatchChecker(password, confirmPassword){
    if(password===confirmPassword){
      this.isPasswordMatched = true;
    }
    else
    this.isPasswordMatched = false;
    }
 
  
}
