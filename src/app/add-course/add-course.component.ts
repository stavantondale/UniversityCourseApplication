import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/models/Course';
import { CourseServiceService } from 'src/services/course-service.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  constructor(private courseService:CourseServiceService,private router: Router) { }

  course:Course = {
    courseId:0,
    courseName:"",
    courseDuration:"",
    courseFees:0,
    courseStartDate:new Date(Date.now()),
    courseEndDate:new Date(Date.now())
  }

  



  ngOnInit(): void {
  }
  onSubmit():any{
    console.log(this.course);
    this.courseService.addCourse(this.course).subscribe(data => {
      alert("Course Added Successfully!");
      this.router.navigate(['/allCourse']);      
    },error=>{
      if(error.status==404)
      alert("This course is already exist.");
      this.router.navigate(['/allCourse']);
    });
  }
}
