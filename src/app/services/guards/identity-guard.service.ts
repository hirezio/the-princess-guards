import { LoginService } from './../login/login.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class IdentityGuardService implements CanActivate {

  constructor(private router: Router,
  private loginService:LoginService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
    
    const princeToken = localStorage.getItem('princePictureToken');
    
    if (princeToken) {
      return true;  
    }

    console.log('Sending the login homing pigeon');    
    this.loginService.setUrlAfterLogin(state.url);
    this.router.navigate(['/login']);
    return false;
  }  
}
