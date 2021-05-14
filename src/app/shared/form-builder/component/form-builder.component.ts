import {Component, Input, ChangeDetectionStrategy, ElementRef, QueryList, ViewChildren, HostListener, ViewChild} from '@angular/core';
import {moveItemInArray, CdkDragDrop} from '@angular/cdk/drag-drop';
import {SwalComponent} from '@sweetalert2/ngx-sweetalert2';
import {Store} from '@ngrx/store';
import {BehaviorSubject} from 'rxjs';

import {BuilderElemComponent} from 'src/app/shared/form-builder/component/builder-elem/builder-elem.component';
import {IListRowStyleState, IListElemStyleState, IListFormStyleState, IListElements, IBtnStatus} from 'src/app/data/interfaces';
import {IStateReducers} from 'src/app/reducers';
import {RowActionService} from 'src/app/services/row-action.service';
import {ElemActionService} from 'src/app/services/elem-action.service';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FormBuilderComponent {

  public basket: Array<IListElements[]> = [[]];

  public deleteBtnStatus: IBtnStatus = {
    deleteElemBtnStatus: true,
    deleteRowBtnStatus: true
  };

  public errorMessage: BehaviorSubject<string>;

  @Input() listStylesElem: IListElemStyleState[];
  @Input() listStylesForm: IListFormStyleState[];
  @Input() listStylesRow: IListRowStyleState[];

  @ViewChildren('exampleList') listRows: QueryList<ElementRef>;
  @ViewChildren(BuilderElemComponent, {read: ElementRef}) listElems: QueryList<ElementRef>;

  @ViewChild('popupError') popupError: SwalComponent;

  @HostListener('click', ['$event.target'])
  onClick(elem: HTMLElement): void {
    if (elem.classList.contains('example-list')) {
      this.setActiveRow(elem);
    } else if (elem.classList.contains('element-form')) {
      this.setActiveElem(elem);
    }
  }

  constructor(
    private store: Store<IStateReducers>,
    private rowAction: RowActionService,
    private elemAction: ElemActionService,
  ) {
    this.errorMessage = new BehaviorSubject('');
  }

  getExampleListStyle(id: number): any {
    return this.listStylesRow.find(el => el.id === id).styles;
  }

  getRowID(order: any): number {
    return this.listStylesRow[order].id;
  }

  /**
   * Row Actions ================================================================
   */
  addRow(): void {
    this.rowAction.addRow(this.basket, this.errorMessage, this.popupError);
  }

  deleteRow(): void {
    this.rowAction.deleteRow(this.listRows, this.basket, this.errorMessage, this.popupError, this.deleteBtnStatus);
  }

  setActiveRow(row: HTMLElement): void {
    this.rowAction.setActiveRow(row, this.deleteBtnStatus, this.listRows);
  }

  /**
   * End Row Actions ================================================================
   */

  /**
   * Elem Actions ===================================================================
   */
  setActiveElem(elem: any): void {
    this.elemAction.setActiveElem(elem, this.deleteBtnStatus, this.listElems);
  }

  deleteElem(): void {
    this.elemAction.deleteElem(this.basket, this.listElems, this.deleteBtnStatus);
  }

  addElemToBasket(event: CdkDragDrop<any[]>, containerID: number): void {
    this.elemAction.addElemToBasket(event, this.basket, containerID, this.errorMessage, this.popupError);
  }

  drop(event: CdkDragDrop<any[]>): void {
    const containerID = Number(event.container.element.nativeElement.dataset.position);
    if (event.previousContainer === event.container) {
      moveItemInArray(this.basket[containerID], event.previousIndex, event.currentIndex);
    } else {
      this.addElemToBasket(event, containerID);
    }
  }

  /**
   * End Elem Actions ===================================================================
   */
}
