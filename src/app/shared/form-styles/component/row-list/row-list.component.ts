import { Component, Input, OnChanges } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { EStylesNames } from 'src/app/data/enums';
import { SetStyleRowAction } from 'src/app/reducers/rowStyles/rowStyles.actions';
import { getListParamsRowForId, IStateReducers } from 'src/app/reducers';
import { IListRowStyleState } from 'src/app/data/interfaces';

@Component({
  selector: 'app-row-list',
  templateUrl: './row-list.component.html',
  styleUrls: ['./row-list.component.scss']
})
export class RowListComponent implements OnChanges {

  @Input() targetRowId: number;

  public EStylesNames = EStylesNames;

  public listStylesRow: Observable<IListRowStyleState>;

  constructor(private store: Store<IStateReducers>) { }

  ngOnChanges(): void {
    this.listStylesRow = this.store.pipe(select(getListParamsRowForId, { id: this.targetRowId })).pipe(map(i => i[0]));
  }

  onChangeRowStyle({ target }: any): void {
    const name = target.name;
    const value = target.value;
    this.store.dispatch(new SetStyleRowAction({ id: this.targetRowId, param: name, value }))
  }
}
