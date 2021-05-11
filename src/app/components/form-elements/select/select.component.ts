import { Component, Input } from '@angular/core';
import { IListStandartParams } from 'src/app/data/interfaces';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {

  @Input() params: IListStandartParams;

}
