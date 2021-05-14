import { Component, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { EStylesNames } from 'src/app/data/enums';
import { SetStyleRowAction } from 'src/app/reducers/rowStyles/rowStyles.actions';
import { getListParamsRowForId, IStateReducers } from 'src/app/reducers';

@Component({
  selector: 'app-row-list',
  templateUrl: './row-list.component.html',
  styleUrls: ['./row-list.component.scss']
})
export class RowListComponent {

  @Input() targetRowId: number;

  public EStylesNames = EStylesNames;

  public listStylesRow$: Observable<string>;

  constructor(private store: Store<IStateReducers>) { }

  ngOnChanges() {
    this.listStylesRow$ = this.store.pipe(select(getListParamsRowForId, { id: this.targetRowId }))
  }

  onChangeRowStyle(event: any): void {
    const name = event.target.name;
    const value = event.target.value;
    this.store.dispatch(new SetStyleRowAction({ id: this.targetRowId, param: name, value: value }))
  }
}