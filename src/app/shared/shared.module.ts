import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialUiModule } from 'src/app/shared/material-ui/material-ui.module';
import { FormElementsModule } from 'src/app/shared/form-elements/form-elements.module';
import { FormBuilderModule } from 'src/app/shared/form-builder/form-builder.module';
import { FormStylesModule } from 'src/app/shared/form-styles/form-styles.module';
import { ErrorModule } from 'src/app/shared/error/error.module';
import { LoginModule } from 'src/app/shared/login/login.module';
import { MainModule } from 'src/app/shared/main/main.module';
import { RegistrationModule } from 'src/app/shared/registration/registration.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormElementsModule,
    FormBuilderModule,
    FormStylesModule,
    ErrorModule,
    LoginModule,
    MainModule,
    RegistrationModule,
    MaterialUiModule
  ],
  exports: [
    FormElementsModule,
    FormBuilderModule,
    FormStylesModule,
    ErrorModule,
    MainModule,
    RegistrationModule,
    LoginModule,
    MaterialUiModule
  ]
})
export class SharedModule { }
