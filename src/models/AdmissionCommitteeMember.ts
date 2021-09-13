import { User } from "./User";

export class AdmissionCommitteeMember{
    adminId:number;
    adminName:string;
    adminContact:string;
    user:User;

    constructor(adminId : number,adminName:string,adminContact:string,user:User){
        this.adminId=adminId;
        this.adminName=adminName;
        this.adminContact=adminContact;
        this.user=user;
    }
}