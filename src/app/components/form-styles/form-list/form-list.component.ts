import { Component } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectParamsForm } from '../../../reducers/formStyles/formStyles.selectors';
import { SetStyleFormAction } from '../../../reducers/formStyles/formStyles.actions';
import { IListFormStyleState } from 'src/app/data/interfaces';
import { EStylesNames } from 'src/app/data/enums';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.scss']
})
export class FormListComponent {

  public EStylesNames = EStylesNames;

  public listStylesForm$: Observable<string> = this.formStore.pipe(select(selectParamsForm));

  constructor(private formStore: Store<IListFormStyleState>) { }

  onChangeFormStyle(event: any): void {
    let name = event.target.name;
    let value = event.target.value;
    this.formStore.dispatch(new SetStyleFormAction({ param: name, value: value }))
  }
}
