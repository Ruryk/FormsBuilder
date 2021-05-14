import { Component, Input } from '@angular/core';

import { IListStandartParams } from 'src/app/data/interfaces';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() params: IListStandartParams;

}
