import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { User } from 'src/models/User';
import { Role } from 'src/models/Role';
import { LoginService } from 'src/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  user:User=new User(1,'rutuja','Rutujs',Role.UNIVERSITYSTAFFMEMBER);
  
  constructor(private myService:LoginService,private router:Router){

  }
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  if (this.myService.isUserLoggedIn())
    return true;

  this.router.navigate(['login']);
  return false;

}
  }
