import { Component, Input } from '@angular/core';

import { IListStandartParams } from 'src/app/data/interfaces';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html'
})
export class CheckboxComponent {

  @Input() params: IListStandartParams;

}
