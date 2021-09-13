import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddApplicantComponent } from './add-applicant/add-applicant.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { AllCourseComponent } from './all-course/all-course.component';
import { ApplicantDetailsComponent } from './applicant-details/applicant-details.component';
import { AuthGuard } from './auth.guard';
import { GetCourseComponent } from './get-course/get-course.component';
import { HomeApplicantComponent } from './home-applicant/home-applicant.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListMemberComponent } from './list-member/list-member.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MemberHomeComponent } from './member-home/member-home.component';
import { RemoveStaffComponent } from './remove-staff/remove-staff.component';
import { StaffMemberHomePageComponent } from './staff-member-home-page/staff-member-home-page.component';
import { TotalcostComponent } from './totalcost/totalcost.component';
import { UpdateApplicantComponent } from './update-applicant/update-applicant.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { UpdateMemberComponent } from './update-member/update-member.component';
import { UpdateStaffComponent } from './update-staff/update-staff.component';
import { ViewAdmissionsComponent } from './view-admissions/view-admissions.component';
import { ViewallstaffComponent } from './viewallstaff/viewallstaff.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent },
  { path: "viewAdmissions", component: ViewAdmissionsComponent, canActivate: [AuthGuard] },
  { component: AddCourseComponent, path: 'addCourse', canActivate: [AuthGuard] },
  { component: UpdateCourseComponent, path: 'updateCourse', canActivate: [AuthGuard] },
  { component: AllCourseComponent, path: 'allCourse' },
  { component: GetCourseComponent, path: 'getCourse' },
  { path: "addStaff", component: AddStaffComponent },
  { path: "viewAllStaff", component: ViewallstaffComponent, canActivate: [AuthGuard] },
  { path: "updateStaff", component: UpdateStaffComponent, canActivate: [AuthGuard] },
  { path: "removeStaff", component: RemoveStaffComponent, canActivate:[AuthGuard] },
  {path:"updateApplicant",component:UpdateApplicantComponent,canActivate:[AuthGuard]},
  {path:"viewApplicantDetails",component:ApplicantDetailsComponent,canActivate:[AuthGuard]},
  {path:"applicantRegistration",component:AddApplicantComponent},
  { path :"addCommitteeMember", component:AddMemberComponent},
  { path:"updateCommitteeMember", component:UpdateMemberComponent,canActivate:[AuthGuard]},
  { path:"viewAllMembers", component:ListMemberComponent,canActivate:[AuthGuard]},
  {path:'totalcost', component: TotalcostComponent, canActivate:[AuthGuard]},
  {path:'homeApplicant', component:HomeApplicantComponent, canActivate:[AuthGuard]},
  {path:'memberHome', component:MemberHomeComponent, canActivate:[AuthGuard]},
  {path:'staffMemberHomePage', component:StaffMemberHomePageComponent, canActivate:[AuthGuard]},
  {path:'', component:HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
