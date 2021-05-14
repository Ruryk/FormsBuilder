import {ElementRef, Injectable, QueryList} from '@angular/core';
import {Store} from '@ngrx/store';
import {BehaviorSubject} from 'rxjs';
import {SwalComponent} from '@sweetalert2/ngx-sweetalert2';

import {IStateReducers} from 'src/app/reducers';
import {DeleteRowAction, SetNewRowAction} from 'src/app/reducers/rowStyles/rowStyles.actions';
import {SetTargetRowAction} from 'src/app/reducers/target/target.actions';
import {IBtnStatus, IListElements} from 'src/app/data/interfaces';

@Injectable({
  providedIn: 'root'
})
export class RowActionService {

  public counterRowID: number = 1;

  constructor(private store: Store<IStateReducers>) { }

  addRow(
    basket: Array<IListElements[]>,
    message: BehaviorSubject<string>,
    errorPopup: SwalComponent
  ): void {
    if (basket.length < 10) {
      this.addRowToBasket(basket);
    } else {
      message.next('Maximum number of rows!');
      setTimeout(() => errorPopup.fire(), 0);
    }
  }

  addRowToBasket(
    basket: Array<IListElements[]>
  ): void {
    basket.push([]);
    this.store.dispatch(new SetNewRowAction({id: this.counterRowID}));
    this.counterRowID++;
  }

  deleteRow(
    listRows: QueryList<ElementRef>,
    basket: Array<IListElements[]>,
    message: BehaviorSubject<string>,
    errorPopup: SwalComponent,
    deleteBtnStatus: IBtnStatus
  ): void {
    const row = listRows.toArray().find(el => el.nativeElement.classList.contains('active-row')).nativeElement;
    const idRow = Number(row.id);
    const positionRow = Number(row.dataset.position);
    if (basket.length > 1) {
      this.checkChildrenOfRow(positionRow, row, idRow, basket, message, errorPopup, deleteBtnStatus);
    } else {
      this.removeClassOfActiveRow(row, deleteBtnStatus);
    }
  }

  deleteRowFromBasket(
    positionRow: number,
    idRow: number,
    basket: Array<IListElements[]>,
    deleteBtnStatus: IBtnStatus
  ): void {
    basket.splice(positionRow, 1);
    this.store.dispatch(new DeleteRowAction({id: idRow}));
    deleteBtnStatus.deleteRowBtnStatus = true;
  }

  checkChildrenOfRow(
    positionRow: number,
    row: HTMLElement,
    idRow: number,
    basket: Array<IListElements[]>,
    message: BehaviorSubject<string>,
    errorPopup: SwalComponent,
    deleteBtnStatus: IBtnStatus
  ): void {
    if (row.children.length === 0) {
      this.deleteRowFromBasket(positionRow, idRow, basket, deleteBtnStatus);
    } else {
      this.removeClassOfActiveRow(row, deleteBtnStatus);
      message.next('Row are not empty! Delete Elements in row and after delete row!');
      setTimeout(() => errorPopup.fire(), 0);
    }
  }

  setActiveRow(
    row: HTMLElement,
    deleteBtnStatus: IBtnStatus,
    listRows: QueryList<ElementRef>
  ): void {
    if (row.classList.contains('active-row')) {
      this.removeClassOfActiveRow(row, deleteBtnStatus);
    } else {
      this.addClassToTargetRow(row, deleteBtnStatus, listRows);
    }
  }

  removeClassOfActiveRow(
    row: HTMLElement,
    deleteBtnStatus: IBtnStatus
  ): void {
    row.classList.remove('active-row');
    deleteBtnStatus.deleteRowBtnStatus = true;
    this.store.dispatch(new SetTargetRowAction({id: null}));
  }

  addClassToTargetRow(
    row: HTMLElement,
    deleteBtnStatus: IBtnStatus,
    listRows: QueryList<ElementRef>
  ): void {
    listRows.toArray().forEach(el => {
      el.nativeElement.classList.remove('active-row');
    });
    row.classList.add('active-row');
    deleteBtnStatus.deleteRowBtnStatus = false;
    this.store.dispatch(new SetTargetRowAction({ id: Number(row.id) }));
  }

}
