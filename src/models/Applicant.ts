import { Admission } from "./Admission";
import { AdmissionStatus } from "./AdmissionStatus";
import { User } from "./User";

export class Applicant{
    applicantId:number;
    applicantName:string;
    mobileNumber:string;
    applicantDegree:string;
    applicantGraduationPercent:number;
    user:User;
    admission:Admission;
    status:AdmissionStatus;

    constructor( applicantId:number, applicantName:string, mobileNumber:string,
        applicantDegree:string, applicantGraduationPercent:number, user:User,
        admission:Admission, status:AdmissionStatus){
            this.applicantId = applicantId;
            this.applicantName = applicantName;
            this.mobileNumber = mobileNumber;
            this.applicantDegree = applicantDegree;
            this.applicantGraduationPercent = applicantGraduationPercent;
            this.user = user;
            this.admission = admission;
            this.status = status;
        }
}