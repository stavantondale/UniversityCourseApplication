import { Component, OnInit } from '@angular/core';
import { AdmissionDTO } from 'src/models/AdmissionDTO';
import { Course } from 'src/models/Course';
import { AdmissionService } from 'src/services/admission.service';
import { CourseServiceService } from 'src/services/course-service.service';

@Component({
  selector: 'app-view-admissions',
  templateUrl: './view-admissions.component.html',
  styleUrls: ['./view-admissions.component.css']
})
export class ViewAdmissionsComponent implements OnInit {
  applications: AdmissionDTO[] = [];
  courses: Course[] = [];
  isTableDisplayed: boolean;
  constructor(private admissionService: AdmissionService, private courseService: CourseServiceService) {
    this.isTableDisplayed = false;
  }

  ngOnInit(): void {
    //this.getAdmissions();
  }

  getAdmissions() {
    // this.admissionService.viewAdmissions().subscribe(
    //   data=>{
    //     this.handleReceivedData(data);
    //   }
    // )
  }

  handleReceivedData(data) {
    this.applications = data;
    this.isTableDisplayed = true;
  }

  onFilterChange(filter) {
    if (filter === 'course') {
      this.courseService.getAllCourse().subscribe(
        data => {
          this.handleCourseData(data);
        }
      )
    }
  }

  handleCourseData(data) {
    this.courses = data;
  }

  searchByDate(date) {
    if (date) {
      this.isTableDisplayed = true;
      this.admissionService.viewAdmissionsByDate(date).subscribe(
        data => {
          this.handleReceivedData(data);
        },
        error => {
          this.applications = [];
        });
    }
  }

  searchByCourse(courseId) {
    //console.log(courseId);
    if (courseId) {
      this.isTableDisplayed = true;
      this.admissionService.viewAdmissionsByCourse(courseId).subscribe(
        data => {
          this.handleReceivedData(data);
        },
        error => {
          this.applications = [];
        });
    }
  }
}
