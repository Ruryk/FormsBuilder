import { Component, ChangeDetectionStrategy } from '@angular/core';

import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent {

  get loggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  constructor(private authenticationService: AuthenticationService) { }

  logout(event: any): void {
    event.preventDefault();
    this.authenticationService.logout();
  }
}
