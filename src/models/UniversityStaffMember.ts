import { User } from "./User";

export class UniversityStaffMember{
   user:User;
   staffId:number;

     constructor( staffId:number,user:User ){
        this.staffId = staffId;
        this.user = user;
     }

}