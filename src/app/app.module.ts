import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicAuthHtppInterceptorService } from './basic-auth-interceptor.service';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewAdmissionsComponent } from './view-admissions/view-admissions.component';
import { OrderByPipe } from './order-by.pipe';
import { AddCourseComponent } from './add-course/add-course.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { AllCourseComponent } from './all-course/all-course.component';
import { GetCourseComponent } from './get-course/get-course.component';
import { SearchCoursePipe } from './search-course.pipe';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { UpdateStaffComponent } from './update-staff/update-staff.component';
import { ViewallstaffComponent } from './viewallstaff/viewallstaff.component';
import { RemoveStaffComponent } from './remove-staff/remove-staff.component';
import { AddApplicantComponent } from './add-applicant/add-applicant.component';
import { UpdateApplicantComponent } from './update-applicant/update-applicant.component';
import { ViewApplicantByidComponent } from './view-applicant-byid/view-applicant-byid.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { UpdateMemberComponent } from './update-member/update-member.component';
import { GetMemberComponent } from './get-member/get-member.component';
import { ListMemberComponent } from './list-member/list-member.component';
import { SearchApplicationPipe } from './search-application.pipe';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { TotalcostComponent } from './totalcost/totalcost.component';
import { HomeApplicantComponent } from './home-applicant/home-applicant.component';
import { MemberHomeComponent } from './member-home/member-home.component';
import { StaffMemberHomePageComponent } from './staff-member-home-page/staff-member-home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    LogoutComponent,
    ViewAdmissionsComponent,
    OrderByPipe,
    AddCourseComponent,
    UpdateCourseComponent,
    AllCourseComponent,
    GetCourseComponent,
    SearchCoursePipe,
    AddStaffComponent,
    UpdateStaffComponent,
    ViewallstaffComponent,
    RemoveStaffComponent,
    AddApplicantComponent,
    UpdateApplicantComponent,
    ViewApplicantByidComponent,
    AddMemberComponent,
    UpdateMemberComponent,
    GetMemberComponent,
    ListMemberComponent,
    SearchApplicationPipe,
    HomepageComponent,
    FooterComponent,
    TotalcostComponent,
    HomeApplicantComponent,
    MemberHomeComponent,
    StaffMemberHomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
