import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { ControlContainer, FormGroupDirective, FormGroup } from '@angular/forms';
import { IListElementStyleState } from 'src/app/data/interfaces';

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

  @Input() listStylesElement: IListElementStyleState;
  @Input() elementId: number;
  @Input() elementCharacter: string;

  @Input() form: FormGroup;
  @Input() checkValidation: boolean;
  validationWindow: boolean;

  public name: string;

  public elementStyles;

  public EBuilderElements = EBuilderElements;

  constructor() { }

  ngOnInit(): void {
    this.name = 'name-' + this.elementId;
  }

  focusOut(): void {
    this.validationWindow = true;
  }

  ngOnChanges(): void {
    this.elementStyles = this.listStylesElement[this.elementId];
    if (this.checkValidation) {
      this.validationWindow = true;
    }
  }
}
