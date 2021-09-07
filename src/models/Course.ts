export class Course{
    courseId:number;
    courseName:string;
    courseDuration:string;
    courseFees:number;
    courseEndDate:Date;
    courseStartDate:Date;

    constructor(courseId:number,courseName:string,courseDuration:string,courseFees:number,courseEndDate:Date,courseStartDate:Date){
        this.courseId=courseId;
        this.courseName=courseName;
        this.courseDuration=courseDuration;
        this.courseFees=courseFees;
        this.courseStartDate=courseStartDate;
        this.courseEndDate=courseEndDate;

        }

}