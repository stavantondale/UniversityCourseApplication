import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/models/Course';
import { CourseServiceService } from 'src/services/course-service.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {
  courseObj:Course;
  courseId:any;
  courses:Course[];
  constructor(private courseService:CourseServiceService, private router: Router,private route: ActivatedRoute ) {
    this.courseObj=this.courseService.updateMethod();
    console.log(this.courseObj);
   }

  onUpdate(): any{
    return this.courseService.onUpdate(this.courseObj).subscribe(data => {
      alert("Course Updated Successfully!");
      this.router.navigate(['/allCourse']);
    });

  }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => this.courseId=params);
    this.getCourse(this.courseId);
  }
  
  handleSuccessfulResponse(response){
    this.courseObj=response;
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

}
