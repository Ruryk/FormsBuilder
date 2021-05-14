import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IListElemStyleState } from 'src/app/data/interfaces';

import { EBuilderElements } from 'src/app/data/enums';

@Component({
  selector: 'app-builder-elem',
  templateUrl: './builder-elem.component.html',
  styleUrls: ['./builder-elem.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BuilderElemComponent {

  @Input() listStylesElem: IListElemStyleState[];
  @Input() elemId: number;
  @Input() elemCharacter: string;

  public elemStyles;

  public EBuilderElements = EBuilderElements;

  constructor() { }

  ngOnChanges(): void {
    this.elemStyles = this.listStylesElem.find(el => el.id === this.elemId).params;
  }
}
