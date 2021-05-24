import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ReactiveComponentModule } from '@ngrx/component';

import { FormBuilderComponent } from 'src/app/shared/form-builder/component/form-builder.component';
import { BuilderElemComponent } from 'src/app/shared/form-builder/component/builder-elem/builder-elem.component';
import { MaterialUiModule } from 'src/app/shared/material-ui/material-ui.module';


@NgModule({
  declarations: [
    FormBuilderComponent,
    BuilderElemComponent
  ],
  imports: [
    CommonModule,
    MaterialUiModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    ReactiveComponentModule
  ],
  exports: [
    FormBuilderComponent,
    BuilderElemComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormBuilderModule { }
