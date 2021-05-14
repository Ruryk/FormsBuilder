import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormElementsComponent } from 'src/app/components/form-elements/form-elements.component';
import { ButtonComponent } from 'src/app/components/form-elements/button/button.component';
import { SelectComponent } from 'src/app/components/form-elements/select/select.component';
import { InputComponent } from 'src/app/components/form-elements/input/input.component';
import { CheckboxComponent } from 'src/app/components/form-elements/checkbox/checkbox.component';
import { TextareaComponent } from 'src/app/components/form-elements/textarea/textarea.component';
import { MaterialUiModule } from 'src/app/shared/material-ui/material-ui.module';

@NgModule({
  declarations: [
    FormElementsComponent,
    ButtonComponent,
    SelectComponent,
    InputComponent,
    CheckboxComponent,
    TextareaComponent
  ],
  imports: [
    CommonModule,
    MaterialUiModule
  ],
  exports: [
    FormElementsComponent,
    ButtonComponent,
    SelectComponent,
    InputComponent,
    CheckboxComponent,
    TextareaComponent
  ]
})
export class FormElementsModule { }
