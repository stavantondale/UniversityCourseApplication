import { Role } from "./Role";

export class User{
    userId:number;
    username:string;
    password:string;
    role:Role;

    constructor( userId:number, username:string, password:string, role:Role){
        this.userId= userId;
        this.username = username;
        this.password = password;
        this.role = role;    
    }
}