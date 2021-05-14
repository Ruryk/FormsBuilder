import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ReactiveComponentModule } from '@ngrx/component';

import { LoginComponent } from 'src/app/shared/login/component/login.component';
import { MaterialUiModule } from 'src/app/shared/material-ui/material-ui.module';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MaterialUiModule,
    FormsModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    SweetAlert2Module
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
