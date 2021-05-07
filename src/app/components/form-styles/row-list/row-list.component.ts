import { Component, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IListRowStyleState } from 'src/app/data/interfaces';
import { EStylesNames } from 'src/app/data/enums';
import { selectParamsRowForId } from '../../../reducers/rowStyles/rowStyles.selectors';
import { SetStyleRowAction } from '../../../reducers/rowStyles/rowStyles.actions';

@Component({
  selector: 'app-row-list',
  templateUrl: './row-list.component.html',
  styleUrls: ['./row-list.component.scss']
})
export class RowListComponent {

  @Input() targetRowId: number;

  public EStylesNames = EStylesNames;

  public listStylesRow$: Observable<string>;

  constructor(private rowStore$: Store<IListRowStyleState>) { }

  ngOnChanges() {
    this.listStylesRow$ = this.rowStore$.pipe(select(selectParamsRowForId, { id: this.targetRowId }))
  }

  onChangeRowStyle(event: any): void {
    let name = event.target.name;
    let value = event.target.value;
    this.rowStore$.dispatch(new SetStyleRowAction({ id: this.targetRowId, param: name, value: value }))
  }
}