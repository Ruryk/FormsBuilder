import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { IListElemStyleState } from 'src/app/data/interfaces';

import { EBuilderElements } from 'src/app/data/enums';

@Component({
  selector: 'app-builder-elem',
  templateUrl: './builder-elem.component.html',
  styleUrls: ['./builder-elem.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BuilderElemComponent implements OnChanges, ControlValueAccessor {

  @Input() listStylesElem: IListElemStyleState[];
  @Input() elemId: number;
  @Input() elemCharacter: string;

  public elemStyles;

  public EBuilderElements = EBuilderElements;

  constructor() { }

  ngOnChanges(): void {
    this.elemStyles = this.listStylesElem.find(el => el.id === this.elemId).params;
  }

  writeValue(obj: any): void {

  }
  registerOnChange(fn: any): void {

  }
  registerOnTouched(fn: any): void {

  }
  setDisabledState(isDisabled: boolean): void {

  }

}

