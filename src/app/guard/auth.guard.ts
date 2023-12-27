// import { inject } from '@angular/core';
// import { CanActivateFn } from '@angular/router';
// import { AuthService } from '../services/auth.service';


// export const authGuard: CanActivateFn = (route, state) => {
//   return inject(AuthService).getToken();
// };

import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class authGuard implements CanActivate{
  constructor(private authService: AuthService,private router:Router){

  }

  canActivate(): boolean {
    if(this.authService.getToken()){
      return true;
    }else{
      this.router.navigateByUrl('login');
      return false;
    }
    
  }
}
