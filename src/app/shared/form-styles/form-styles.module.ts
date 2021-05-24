import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';

import { FormStylesComponent } from 'src/app/shared/form-styles/component/form-styles.component';
import { FormListComponent } from 'src/app/shared/form-styles/component/form-list/form-list.component';
import { RowListComponent } from 'src/app/shared/form-styles/component/row-list/row-list.component';
import { ElementsListComponent } from 'src/app/shared/form-styles/component/elements-list/elements-list.component';
import { MaterialUiModule } from 'src/app/shared/material-ui/material-ui.module';

@NgModule({
  declarations: [
    FormListComponent,
    RowListComponent,
    ElementsListComponent,
    FormStylesComponent
  ],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    MaterialUiModule
  ],
  exports: [
    FormListComponent,
    RowListComponent,
    ElementsListComponent,
    FormStylesComponent
  ]
})
export class FormStylesModule { }
