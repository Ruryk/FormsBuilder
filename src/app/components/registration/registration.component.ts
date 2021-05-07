import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { UserService } from 'src/app/services/user.service';

import { BehaviorSubject } from 'rxjs';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent {

  @ViewChild('popupError') popupError: SwalComponent;

  public errorMessage: BehaviorSubject<string>;

  constructor(private userService: UserService) {
    this.errorMessage = new BehaviorSubject("");
  }

  sendForm(event: any): void {
    event.preventDefault();
    const email = event.target[0].value;
    const pass = event.target[1].value;
    this.userService.registration({ "email": email, "password": pass }, this.errorMessage, this.popupError);
  }

  public emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  public passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);

  public matcher = new MyErrorStateMatcher();
}
