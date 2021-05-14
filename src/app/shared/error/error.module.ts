import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorComponent } from 'src/app/shared/error/component/error.component';
import { ErrorRoutingModule } from 'src/app/shared/error/error-routing.module';

@NgModule({
  declarations: [
    ErrorComponent
  ],
  imports: [
    CommonModule,
    ErrorRoutingModule
  ],
  exports: [
    ErrorComponent
  ]
})
export class ErrorModule { }
