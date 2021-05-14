import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ReactiveComponentModule } from '@ngrx/component';

import { RegistrationComponent } from 'src/app/components/registration/registration.component';
import { MaterialUiModule } from 'src/app/shared/material-ui/material-ui.module';

@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    MaterialUiModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    SweetAlert2Module
  ],
  exports: [
    RegistrationComponent
  ]
})
export class RegistrationModule { }
