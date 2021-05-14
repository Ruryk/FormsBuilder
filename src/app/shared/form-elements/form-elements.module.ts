import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormElementsComponent } from 'src/app/shared/form-elements/component/form-elements.component';
import { ButtonComponent } from 'src/app/shared/form-elements/component/button/button.component';
import { SelectComponent } from 'src/app/shared/form-elements/component/select/select.component';
import { InputComponent } from 'src/app/shared/form-elements/component/input/input.component';
import { CheckboxComponent } from 'src/app/shared/form-elements/component/checkbox/checkbox.component';
import { TextareaComponent } from 'src/app/shared/form-elements/component/textarea/textarea.component';
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
