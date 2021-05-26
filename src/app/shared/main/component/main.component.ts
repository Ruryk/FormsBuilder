import {
  Component, ChangeDetectionStrategy,
  // OnDestroy, OnInit 
} from '@angular/core';
import { Store } from '@ngrx/store';
import {
  Observable,
  //  Subject 
} from 'rxjs';
// import { takeUntil } from 'rxjs/operators';

import { getListParamsElements, getListParamsForm, getListParamsRows, getTargetElement, IStateReducers, getTargetRow } from 'src/app/reducers';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MainComponent
// implements OnInit, OnDestroy 
{

  // private unsubscribe$ = new Subject<void>();

  constructor(private store: Store<IStateReducers>) { }

  public listStylesElement$: Observable<string> = this.store.select(getListParamsElements);
  public listStylesRow$: Observable<string> = this.store.select(getListParamsRows);
  public listStylesForm$: Observable<string> = this.store.select(getListParamsForm);
  public targetElementId$: Observable<number> = this.store.select(getTargetElement);
  public targetRowId$: Observable<number> = this.store.select(getTargetRow);

  // public listStylesElement;

  // ngOnInit(): void {
  // this.listStylesElement$.pipe(takeUntil(this.unsubscribe$)).subscribe(subs => this.listStylesElement = subs);
  // }

  // ngOnDestroy(): void {
  // this.unsubscribe$.next();
  // this.unsubscribe$.complete();
  // }
}
