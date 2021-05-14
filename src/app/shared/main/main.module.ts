import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ReactiveComponentModule } from '@ngrx/component';

import { MainComponent } from 'src/app/components/main/main.component';
import { FormStylesModule } from 'src/app/shared/form-styles/form-styles.module';
import { FormElementsModule } from 'src/app/shared/form-elements/form-elements.module';
import { FormBuilderModule } from 'src/app/shared/form-builder/form-builder.module';
import { MaterialUiModule } from 'src/app/shared/material-ui/material-ui.module';

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    MaterialUiModule,
    FormStylesModule,
    FormElementsModule,
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
