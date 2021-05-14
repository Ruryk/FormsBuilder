import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialUiModule } from 'src/app/shared/material-ui/material-ui.module';
import { FormElementsModule } from 'src/app/shared/form-elements/form-elements.module';
import { FormBuilderModule } from 'src/app/shared/form-builder/form-builder.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormElementsModule,
    FormBuilderModule,
    MaterialUiModule
  ],
  exports: [
    FormElementsModule,
    FormBuilderModule,
    MaterialUiModule
  ]
})
export class SharedModule { }
