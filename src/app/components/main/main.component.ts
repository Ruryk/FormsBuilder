import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IListFormStyleState, IListElemStyleState, ITargetId } from 'src/app/data/interfaces';

import { selectParamsForm } from '../../reducers/formStyles/formStyles.selectors';
import { selectParamsElem } from '../../reducers/elemStyles/elemStyles.selectors';
import { selectParamsRow } from '../../reducers/rowStyles/rowStyles.selectors';
import { selectElemId, selectRowId } from '../../reducers/target/target.selectors';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MainComponent implements OnInit {

  constructor(
    private store: Store<IListElemStyleState>,
    private formStore: Store<IListFormStyleState>,
    private targetStore: Store<ITargetId>
  ) { }

  public listStylesElem$: Observable<string> = this.store.pipe(select(selectParamsElem));
  public listStylesRow$: Observable<string> = this.store.pipe(select(selectParamsRow));
  public listStylesForm$: Observable<string> = this.formStore.pipe(select(selectParamsForm));

  public targetElemId: Observable<number> = this.targetStore.pipe(select(selectElemId));
  public targetRowId: Observable<number> = this.targetStore.pipe(select(selectRowId));

  public listStylesElem = [];

  ngOnInit(): void {
    this.listStylesElem$.subscribe(subs => this.listStylesElem[0] = subs);
  }
}