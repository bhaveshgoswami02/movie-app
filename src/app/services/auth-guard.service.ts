import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public authService:AuthService,public router:Router) { }

  canActivate():boolean {
    if(this.authService.getUid() && this.authService.getCustomer()){
      return true
    }
    else
    {
      this.router.navigateByUrl("/auth")
      return false
    }
  }
}
