import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { selectParamsElemForId } from '../../../reducers/elemStyles/elemStyles.selectors';
import { SetStyleElemAction, SetParamElemAction } from '../../../reducers/elemStyles/elemStyles.actions';
import { IListElemStyleState } from 'src/app/data/interfaces';
import { EParamsNames, EStylesNames } from 'src/app/data/enums';
import { CPxNamesStyles } from 'src/app/data/constantes';

@Component({
  selector: 'app-elem-list',
  templateUrl: './elem-list.component.html',
  styleUrls: ['./elem-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElemListComponent {

  public EParamsNames = EParamsNames;
  public EStylesNames = EStylesNames;

  @Input() targetElemId: number;

  public listStyles: any = [];

  constructor(
    private store: Store<IListElemStyleState>
  ) { }

  ngOnChanges(): void {
    this.store.pipe(select(selectParamsElemForId, { id: this.targetElemId })).subscribe(subs => this.listStyles = subs);
  }

  onChange(event: any): void {
    const name = event.target.name;
    const value = event.target.value;

    if (CPxNamesStyles.includes(name)) {
      this.store.dispatch(new SetStyleElemAction({ id: this.targetElemId, style: name, value: value }))
    } else {
      this.store.dispatch(new SetParamElemAction({ id: this.targetElemId, param: name, value: value }))
    }
  }
}
