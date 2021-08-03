import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

import { AuthenticationService } from 'src/app/services/authentication.service';
import { MyErrorStateMatcher } from 'src/app/services/error-matcher.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  public formGroup = new FormGroup({
    emailFormControl: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    passwordFormControl: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ])
  })

  @ViewChild('popupError') popupError: SwalComponent;

  public errorMessage: BehaviorSubject<string>;

  constructor(
    private authenticationService: AuthenticationService,
    public matcher: MyErrorStateMatcher
  ) {
    this.errorMessage = new BehaviorSubject('');
  }

  sendForm(event: any): void {
    event.preventDefault();
    const email = event.target[0].value;
    const pass = event.target[1].value;
    this.authenticationService.login({ email, password: pass }, this.errorMessage, this.popupError);
  }


}
