import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Course } from 'src/models/Course';
import { CourseServiceService } from 'src/services/course-service.service';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-get-course',
  templateUrl: './get-course.component.html',
  styleUrls: ['./get-course.component.css']
})
export class GetCourseComponent implements OnInit {
 
  course:Course;
  courseId:any;
  constructor(private courseService:CourseServiceService,private loginService:LoginService,private route: ActivatedRoute,private router:Router) { }
  
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

  getAllCourses(){
    this.courseService.getAllCourse().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  update(updateCourse:Course){
    this.courseService.update(updateCourse);
    this.router.navigate(['/updateCourse'], { queryParams: { courseId: updateCourse.courseId } });
  }

  apply(applyCourse:Course){
    this.router.navigate(['/applicantRegistration'], { queryParams: { courseId: applyCourse.courseId } });
  }
  
  delete(deleteCourse:Course):any{
    var selection=confirm("Are you sure!");
    if(selection==true){
      //this.course.splice(this.course.indexOf(deleteCourse),1);
      this.courseService.deleteCourse(deleteCourse.courseId).subscribe(data => {
        alert("Course Deleted Successfully!");
        //this.getAllCourses();
        this.router.navigate(['/allCourse']);
    },error=>{
      if(error.status==500)
      alert("Applicant already applied for this course.");
    });}
    
  }
  isApplicant():boolean{
    return this.loginService.isApplicant();
  }
  isUniversityStaff():boolean{
    return this.loginService.isUniversityStaff();
  }
  isAdmissionCommitteeMember():boolean{
    return this.loginService.isAdmissionCommitteeMember();
  }

}
