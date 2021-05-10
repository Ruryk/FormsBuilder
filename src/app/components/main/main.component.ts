import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getListParamsElems, getListParamsForm, getListParamsRows, getTargetElem, IStateRedusers } from 'src/app/reducers';

import { getTargetRow } from "../../reducers";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MainComponent implements OnInit {

  constructor(
    private store: Store<IStateRedusers>
  ) { }

  public listStylesElem$: Observable<string> = this.store.pipe(select(getListParamsElems));
  public listStylesRow$: Observable<string> = this.store.pipe(select(getListParamsRows));
  public listStylesForm$: Observable<string> = this.store.pipe(select(getListParamsForm));
  public targetElemId: Observable<number> = this.store.pipe(select(getTargetElem));
  public targetRowId: Observable<number> = this.store.pipe(select(getTargetRow));

  public listStylesElem = [];

  ngOnInit(): void {
    this.listStylesElem$.subscribe(subs => this.listStylesElem[0] = subs);
  }
}