import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Applicant } from 'src/models/Applicant';
import { ApplicantService } from 'src/services/applicant.service';

@Component({
  selector: 'app-view-applicant-byid',
  templateUrl: './view-applicant-byid.component.html',
  styleUrls: ['./view-applicant-byid.component.css']
})
export class ViewApplicantByidComponent implements OnInit {
  
  applicants : Applicant[  ];

  constructor(private applicantService: ApplicantService, private router:Router) {
   }
    ngOnInit(): void {
      // this.viewApplicantsById();
  }

  handleSuccessfullResponse(response){
    this.applicants=response;
  }
  // viewApplicantsById(){
  //   this.applicantService.viewApplicantById(this.applicants.applicantId).subscribe(response=> this.handleSuccessfullResponse(response),
  //   );
  // }

}
