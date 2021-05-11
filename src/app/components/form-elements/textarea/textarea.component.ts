import { Component, Input } from '@angular/core';
import { IListStandartParams } from 'src/app/data/interfaces';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html'
})
export class TextareaComponent {

  @Input() params: IListStandartParams;

}
