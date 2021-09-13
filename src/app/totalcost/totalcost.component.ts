import { Component, OnInit } from '@angular/core';
import { Course } from 'src/models/Course';
import { AdmissionService } from 'src/services/admission.service';
import { CourseServiceService } from 'src/services/course-service.service';

@Component({
  selector: 'app-totalcost',
  templateUrl: './totalcost.component.html',
  styleUrls: ['./totalcost.component.css']
})
export class TotalcostComponent implements OnInit {
courses:Course[];
cost:any[]=[];
  constructor(private courseService:CourseServiceService,private addmissionService:AdmissionService) { }

  ngOnInit(): void {
    this.getCourse();
   
  }
  getCourse(){
  
  this.courseService.getAllCourse().subscribe((Response:any)=>{
  this.handleCourseResponse(Response);
    
  });

  }
  handleCourseResponse(response){
    this.courses=response;
    console.log(this.courses);
    this.totalcost();
  }
  
  totalcost(){   
    console.log("string:totalCost")
    for(let course of this.courses){
      this.addmissionService.totalCostByCourse(course.courseId).subscribe(data=>{
        this.handleCostData(data,course);
      });
      //console.log(course);
    }
    console.log(this.cost);
   //for(var i=0 ;i<this.courses.length;i++){
     //console.log(this.courses[i]);
  // }
    
  }
  
  handleCostData(response,course:Course){
this.cost.push({
  courseId:course.courseId,
  courseName:course.courseName,
  courseAddmission:response/course.courseFees,
  totalCost:response
});
console.log(this.cost);
  }
}


