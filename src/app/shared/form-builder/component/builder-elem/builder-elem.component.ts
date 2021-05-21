import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { ControlContainer, FormGroupDirective, FormGroup } from '@angular/forms';
import { IListElemStyleState } from 'src/app/data/interfaces';

import { EBuilderElements } from 'src/app/data/enums';


@Component({
  selector: 'app-builder-elem',
  templateUrl: './builder-elem.component.html',
  styleUrls: ['./builder-elem.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})

export class BuilderElemComponent implements OnChanges, OnInit {

  @Input() listStylesElem: IListElemStyleState[];
  @Input() elemId: number;
  @Input() elemCharacter: string;

  @Input() form: FormGroup;
  @Input() formElemCounter: number;
  @Input() checkValidation: boolean;
  validationWindow: boolean;

  name: string;

  public elemStyles;

  public EBuilderElements = EBuilderElements;

  constructor() {

  }
  ngOnInit(): void {
    this.name = 'name-' + this.formElemCounter;
  }

  focusOut(): void {
    this.validationWindow = true;
  }

  ngOnChanges(): void {
    this.elemStyles = this.listStylesElem.find(el => el.id === this.elemId).params;
    if (this.checkValidation) {
      this.validationWindow = true;
    }
  }
}
