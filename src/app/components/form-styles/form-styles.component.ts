import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-form-styles',
  templateUrl: './form-styles.component.html',
  styleUrls: ['./form-styles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FormStylesComponent {

  public changeCount = 0;
  public panelOpenState = false;
  public step = 0;

  setStep(index: number): void {
    this.step = index;
  }

  @Input() targetElemId: number;
  @Input() targetRowId: number;

  ngOnChanges(changes: any): void {
    if (changes['targetElemId'] && this.changeCount > 0) {
      this.setStep(2);
    } else if (changes['targetRowId'] && this.changeCount > 0) {
      this.setStep(1);
    }
    this.changeCount++;
  }
}
