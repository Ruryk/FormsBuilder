import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SetStyleElementAction, SetParamElementAction } from 'src/app/reducers/element-styles/element-styles.actions';
import { EBuilderElements, EParamsNames, EStylesNames } from 'src/app/data/enums';
import { CNamesStyles } from 'src/app/data/constantes';
import { getListParamsElemForId, IStateReducers } from 'src/app/reducers';

import { IListElementStyleState } from 'src/app/data/interfaces';

@Component({
  selector: 'app-elements-list',
  templateUrl: './elements-list.component.html',
  styleUrls: ['./elements-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElementsListComponent implements OnChanges {

  public EParamsNames = EParamsNames;
  public EStylesNames = EStylesNames;
  public EBuilderElements = EBuilderElements;

  @Input() targetElementId: number;

  public listStyles$: Observable<IListElementStyleState>;

  constructor(private store: Store<IStateReducers>) { }

  ngOnChanges(): void {
    this.listStyles$ = this.store.pipe(select(getListParamsElemForId, { id: this.targetElementId })).pipe(map(i => i[0]));
  }

  onChange({ target }: any): void {
    const name = target.name;
    const value = target.value;

    if (CNamesStyles.includes(name)) {
      this.store.dispatch(new SetStyleElementAction({ id: this.targetElementId, style: name, value }));
    } else {
      this.store.dispatch(new SetParamElementAction({ id: this.targetElementId, param: name, value }));
    }
  }
}
