import { DatePipe } from '@angular/common';
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

  todayDate:string;
  endDateLimit:string;

  constructor(private courseService:CourseServiceService,private router: Router, private datePipe:DatePipe) {
    this.todayDate=this.datePipe.transform(Date.now(),"yyyy-MM-dd");
   }

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
      //this.router.navigate(['/allCourse']);
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
    this.course.courseDuration= months <= 0 ? 0 : months;
    }
    
  }


}
