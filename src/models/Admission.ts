import { AdmissionStatus } from "./AdmissionStatus";

export class Admission{
    admissionId:number;
    courseId:number;
    applicantId:number;
    admissionDate:Date;
    status:AdmissionStatus;

    constructor(admissionId:number, courseId:number, applicantId:number,
        admissionDate:Date, status:AdmissionStatus){
            this.admissionId = admissionId;
            this.courseId = courseId;
            this.applicantId = applicantId;
            this.admissionDate = admissionDate;
            this.status = status;
        }
}