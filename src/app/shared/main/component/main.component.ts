import { Component, ChangeDetectionStrategy, } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, } from 'rxjs';

import { IListElementStyleState, IListFormStyleState, IListRowStyleState } from 'src/app/data/interfaces';
import { getListParamsElements, getListParamsForm, getListParamsRows, getTargetElement, IStateReducers, getTargetRow } from 'src/app/reducers';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MainComponent {

  constructor(private store: Store<IStateReducers>) { }

  public listStylesElement$: Observable<IListElementStyleState> = this.store.select(getListParamsElements);
  public listStylesRow$: Observable<IListRowStyleState> = this.store.select(getListParamsRows);
  public listStylesForm$: Observable<IListFormStyleState> = this.store.select(getListParamsForm);
  public targetElementId$: Observable<number> = this.store.select(getTargetElement);
  public targetRowId$: Observable<number> = this.store.select(getTargetRow);

}
