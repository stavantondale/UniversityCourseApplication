import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from 'src/models/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {
  updateCourse:Course;
  private baseUrl: string = 'http://localhost:8590/course/' 
  constructor(private httpService: HttpClient) { }

  course:Course;
  addCourse(course:Course){
    return this.httpService.post(this.baseUrl+"courseCreation",course);
  }
  update( updateCourse:Course){
    this.updateCourse=updateCourse;
  }
  updateMethod(){
    return this.updateCourse;
  }
  onUpdate(updtCourse:Course){
    return this.httpService.put(this.baseUrl+"updateCourse",updtCourse);
  }
  deleteCourse(courseId:number){
    return this.httpService.delete(this.baseUrl+"deleteCourse/"+ courseId);
  }
  getCourse(courseId:number){
    console.log(courseId);
    return this.httpService.get(this.baseUrl+"getCourse/"+courseId);
    //return this.course;
  }
  
  getAllCourse(){
    return this.httpService.get<Course>(this.baseUrl+"getAllCourse");
  }
}
