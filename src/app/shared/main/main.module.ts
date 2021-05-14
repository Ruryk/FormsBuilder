import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ReactiveComponentModule } from '@ngrx/component';

import { MainComponent } from 'src/app/shared/main/component/main.component';
import { FormStylesModule } from 'src/app/shared/form-styles/form-styles.module';
import { FormElementsModule } from 'src/app/shared/form-elements/form-elements.module';
import { FormBuilderModule } from 'src/app/shared/form-builder/form-builder.module';
import { MaterialUiModule } from 'src/app/shared/material-ui/material-ui.module';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    MaterialUiModule,
    FormStylesModule,
    FormElementsModule,
    MainRoutingModule,
    FormBuilderModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    ReactiveComponentModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
