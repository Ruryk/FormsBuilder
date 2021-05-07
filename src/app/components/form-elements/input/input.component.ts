import { Component, Input } from '@angular/core';
import { IListStandartParams } from 'src/app/data/interfaces';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent {

  @Input() params: IListStandartParams;

}
