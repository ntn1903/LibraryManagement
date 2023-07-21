import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private route: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isLoggedIn()) {
      // if (route.url.length > 0) {
      //   let menu = route.url[0].path;
      //   if (menu == 'user') {
      //     if (this.authService.getUserRole() == 'admin') {
      //       return true;
      //     }
      //     else {
      //       return false;
      //     }
      //   }
      // }
      return true;
    }
    else {
      this.route.navigate(['login']);
      return false;
    }
  }

}
