import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { SetStyleFormAction } from 'src/app/reducers/formStyles/formStyles.actions';
import { EStylesNames } from 'src/app/data/enums';
import { getListParamsForm, IStateReducers } from 'src/app/reducers';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.scss']
})
export class FormListComponent {

  public EStylesNames = EStylesNames;

  public listStylesForm$: Observable<string> = this.store.pipe(select(getListParamsForm));

  constructor(private store: Store<IStateReducers>) { }

  onChangeFormStyle({ target }: any): void {
    const name = target.name;
    const value = target.value;
    this.store.dispatch(new SetStyleFormAction({ param: name, value }))
  }
}
