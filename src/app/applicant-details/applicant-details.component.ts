import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Applicant } from 'src/models/Applicant';
import { Course } from 'src/models/Course';
import { ApplicantService } from 'src/services/applicant.service';
import { CourseServiceService } from 'src/services/course-service.service';
import { AddApplicantComponent } from '../add-applicant/add-applicant.component';

@Component({
  selector: 'app-applicant-details',
  templateUrl: './applicant-details.component.html',
  styleUrls: ['./applicant-details.component.css'],
  providers: [AddApplicantComponent]
})
export class ApplicantDetailsComponent implements OnInit {
   applicant: Applicant;
   applicantId: any;
   course: Course;


  constructor(private applicantServiece:ApplicantService,private route: ActivatedRoute, private router: Router, private courseService: CourseServiceService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => this.applicantId=params);
    this.applicantDetails(this.applicantId);
    // this.getCourse(this.applicant.admission.courseId);
  }

  handleSuccessfulResponse(response){
    this.applicant=response;
  }

  applicantDetails(applicantId) {
    console.log(this.applicant)
    this.applicantServiece.viewApplicantDetails(this.applicantId).subscribe(data=>{
      this.handleSuccessfulResponse(data);
      this.getCourse(this.applicant.admission.courseId);
    })
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
