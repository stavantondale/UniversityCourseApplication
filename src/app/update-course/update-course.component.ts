import { DatePipe } from '@angular/common';
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
  todayDate:string;
  endDateLimit:string;
  courseObj:Course;
  courseId:any;
  courses:Course[];
  constructor(private courseService:CourseServiceService, private router: Router,private route: ActivatedRoute, private datePipe:DatePipe ) {
    
    this.todayDate=this.datePipe.transform(Date.now(),"yyyy-MM-dd");
    this.courseObj=this.courseService.updateMethod();
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

  addMonth(endDateLimit:Date){
    endDateLimit=new Date(endDateLimit);
    endDateLimit = new Date(endDateLimit.setMonth((endDateLimit.getMonth()+1)));
    this.endDateLimit=this.datePipe.transform(endDateLimit,"yyyy-MM-dd");
  }
  monthDiff(d1:Date, d2:Date) {
    
    console.log("in month diff method")
    console.log(d1);
   
    if(!d1||d2){
      var months;
      d1=new Date (d1);
    d2=new Date (d2);
  
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    this.courseObj.courseDuration= months <= 0 ? 0 : months;
    }
    
  }

}
