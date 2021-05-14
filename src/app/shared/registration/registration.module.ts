import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ReactiveComponentModule } from '@ngrx/component';

import { RegistrationComponent } from 'src/app/shared/registration/component/registration.component';
import { MaterialUiModule } from 'src/app/shared/material-ui/material-ui.module';
import { RegistrationRoutingModule } from './registration-routing.module';

@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    MaterialUiModule,
    FormsModule,
    RegistrationRoutingModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    SweetAlert2Module
  ],
  exports: [
    RegistrationComponent
  ]
})
export class RegistrationModule { }
