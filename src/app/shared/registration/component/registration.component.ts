import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

import { UserService } from 'src/app/services/user.service';
import { MyErrorStateMatcher } from 'src/app/services/error-matcher.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent {
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

  public errorMessage: BehaviorSubject<string>;

  @ViewChild('popupError') popupError: SwalComponent;

  constructor(
    private userService: UserService,
    public matcher: MyErrorStateMatcher
  ) {
    this.errorMessage = new BehaviorSubject('');
  }

  sendForm(event: MouseEvent): void {
    event.preventDefault();
    const email = event.target[0].value;
    const pass = event.target[1].value;
    this.userService.register({ email, password: pass }, this.errorMessage, this.popupError);
  }

}
