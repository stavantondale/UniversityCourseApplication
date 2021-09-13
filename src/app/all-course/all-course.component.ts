import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/models/Course';
import { CourseServiceService } from 'src/services/course-service.service';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-all-course',
  templateUrl: './all-course.component.html',
  styleUrls: ['./all-course.component.css']
})
export class AllCourseComponent implements OnInit {

  course:Course[];
  courseSearch:string="";
  constructor(private courseService:CourseServiceService, private router:Router,private loginService:LoginService) {

   }

  ngOnInit(): any {
    this.getAllCourses();
  }
  handleSuccessfulResponse(response){
    this.course=response;
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
        this.getAllCourses();
    },error=>{
      if(error.status==500)
      alert("Applicant already applied for this course.");
    });}
    //this.router.navigate(['/allCourse']);
  }

  isUniversityStaff():boolean{
    return this.loginService.isUniversityStaff();
  }
  isApplicant(){
    return this.loginService.isApplicant();
  }
  isAdmissionCommitteeMember():boolean{
    return this.loginService.isAdmissionCommitteeMember();
  }
  viewCourse(course:Course){
    //this.courseService.setCourse(course);
    this.router.navigate(['/getCourse'], { queryParams: { courseId: course.courseId } });
  }
}


