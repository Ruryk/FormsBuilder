import { Component, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-form-styles',
  templateUrl: './form-styles.component.html',
  styleUrls: ['./form-styles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FormStylesComponent implements OnChanges {

  public changeCount = 0;
  public panelOpenState = false;
  public step = 0;

  setStep(index: number): void {
    this.step = index;
  }

  @Input() targetElementId: number;
  @Input() targetRowId: number;

  ngOnChanges(changes: any): void {
    if (changes['targetElementId'] && this.changeCount > 0) {
      this.setStep(2);
    } else if (changes['targetRowId'] && this.changeCount > 0) {
      this.setStep(1);
    }
    this.changeCount++;
  }
}
