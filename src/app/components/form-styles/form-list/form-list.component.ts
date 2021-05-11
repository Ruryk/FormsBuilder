import { Component } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { SetStyleFormAction } from '../../../reducers/formStyles/formStyles.actions';
import { EStylesNames } from 'src/app/data/enums';
import { getListParamsForm, IStateRedusers } from 'src/app/reducers';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.scss']
})
export class FormListComponent {

  public EStylesNames = EStylesNames;

  public listStylesForm$: Observable<string> = this.store.pipe(select(getListParamsForm));

  constructor(private store: Store<IStateRedusers>) { }

  onChangeFormStyle(event: any): void {
    const name = event.target.name;
    const value = event.target.value;
    this.store.dispatch(new SetStyleFormAction({ param: name, value: value }))
  }
}
