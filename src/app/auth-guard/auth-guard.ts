import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthenticationService } from 'src/app/services/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  canActivate(): boolean {
    if (this.authenticationService.isLoggedIn()) return true;
    this.router.navigate(['/login']);
    return false;
  }
}