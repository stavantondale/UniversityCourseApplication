import { Component, OnInit } from '@angular/core';
import { Applicant } from 'src/models/Applicant';
import { ApplicantService } from 'src/services/applicant.service';

@Component({
  selector: 'app-home-applicant',
  templateUrl: './home-applicant.component.html',
  styleUrls: ['./home-applicant.component.css']
})
export class HomeApplicantComponent implements OnInit {

  applicant:Applicant;
  constructor(private applicantService:ApplicantService) { }

  ngOnInit(): void {
    this.getApplicantDetails();
  }

  getApplicantDetails(){
    
      this.applicantService.viewApplicantById().subscribe(data=>{
         
         this.handleSucessfulResponse(data);
        
       })
    
  }

  handleSucessfulResponse(data){
    this.applicant=data;
  }


}
