import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Applicant } from 'src/models/Applicant';
import { Course } from 'src/models/Course';
import { ApplicantService } from 'src/services/applicant.service';
import { CourseServiceService } from 'src/services/course-service.service';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-update-applicant',
  templateUrl: './update-applicant.component.html',
  styleUrls: ['./update-applicant.component.css']
  // providers:[ApplicantService]
})
export class UpdateApplicantComponent implements OnInit {
  updalert: boolean = false
  delalert:boolean =false

  course: Course
  applicant: Applicant;
  
  constructor( private applicantService:ApplicantService, private router:Router, private courseService:CourseServiceService, private loginService:LoginService) { }

  ngOnInit(): void {
    this.getInfo();
  }

  login(registerForm: {applicantName:string,userName:string,password:string}) {
    
   }

   handleSucessfulResponse(response){
    this.applicant=response;
    this.applicant.user.password="";
  }

  getInfo() {
    this.applicantService.viewApplicantById().subscribe(data=>{
       console.log(data);
       console.log("applicant Info Received!!");
       this.handleSucessfulResponse(data);
       this.getCourse(this.applicant.admission.courseId);
     })
  }

  updateApplicant(){
    // this.applicant.admission
    this.applicantService.addApplicant(this.applicant).subscribe(data=> {
      console.log(data);
      alert("Applicant Updated Successfully!");
      
    })
    // console.log(this.applicant)
  }
  closeAlert() {
    this.updalert = false
  }
  
  deleteApplicant(){
    var selection=confirm("Are you sure!");
    if (selection){
      this.applicantService.deleteApplicant(this.applicant).subscribe(data => {
        alert("Applicant Deleted Successfully!");
      this.delalert= true
      this.loginService.logOut();
       this.router.navigate(['login']);
      }    
    );
  
    }
    
  }

  handleCourseResponse(data){
    this.course=data;
  }

  getCourse(courseId){
    this.courseService.getCourse(courseId).subscribe(data => {
      this.handleCourseResponse(data);
    })
  }
  


}
