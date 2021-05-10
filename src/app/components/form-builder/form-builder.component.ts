import { Component, Input, ChangeDetectionStrategy, ElementRef, QueryList, ViewChildren, HostListener, ViewChild } from '@angular/core';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { BuilderElemComponent } from './builder-elem/builder-elem.component';

import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

import { SetNewElemAction, DeleteElemAction } from '../../reducers/elemStyles/elemStyles.actions';
import { IListRowStyleState, IListElemStyleState, IListFormStyleState, IListElements } from 'src/app/data/interfaces';
import { EBuilderElements } from '../../data/enums';
import { DeleteRowAction, SetNewRowAction } from '../../reducers/rowStyles/rowStyles.actions';
import { SetTargetRowAction, SetTargetElemAction } from '../../reducers/target/target.actions';

import { IStateRedusers } from 'src/app/reducers';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FormBuilderComponent {

  @Input() listStylesElem: IListElemStyleState[];
  @Input() listStylesForm: IListFormStyleState[];
  @Input() listStylesRow: IListRowStyleState[];

  @ViewChildren('exampleList') listRows: QueryList<ElementRef>;
  @ViewChildren(BuilderElemComponent, { read: ElementRef }) listElems: QueryList<ElementRef>;

  @ViewChild('popupError') popupError: SwalComponent;

  @HostListener('click', ['$event.target'])
  onClick(elem: HTMLElement) {
    if (elem.classList.contains('example-list')) {
      this.setActiveRow(elem);
    } else if (elem.classList.contains('element-form')) {
      this.setActiveElem(elem);
    }
  }

  public EBuilderElements = EBuilderElements;

  public basket: Array<IListElements[]> = [[]];

  public counterID: number = 0;
  public counterRowID: number = 1;

  public deleteElemBtnStatus: boolean = true;
  public deleteRowBtnStatus: boolean = true;

  public errorMessage: BehaviorSubject<string>;

  constructor(private store: Store<IStateRedusers>) {
    this.errorMessage = new BehaviorSubject("");
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
    if (this.basket.length < 10) {
      this.addRowToBasket();
    } else {
      this.errorMessage.next('Maximum number of rows!');
      setTimeout(() => this.popupError.fire(), 0);
    }
  }

  addRowToBasket(): void {
    this.basket.push([]);
    this.store.dispatch(new SetNewRowAction({ id: this.counterRowID }));
    this.counterRowID++;
  }

  deleteRow(): void {
    const row = this.listRows.toArray().find(el => el.nativeElement.classList.contains('active-row')).nativeElement;
    const idRow = Number(row.id);
    const positionRow = Number(row.dataset.position);
    if (this.basket.length > 1) {
      this.checkChildrenOfRow(positionRow, row, idRow);
    } else {
      this.removeClassOfActiveRow(row);
    }
  }

  deleteRowFromBasket(positionRow: number, idRow: number): void {
    this.basket.splice(positionRow, 1);
    this.store.dispatch(new DeleteRowAction({ id: idRow }));
    this.deleteRowBtnStatus = true;
  }

  checkChildrenOfRow(positionRow: number, row: HTMLElement, idRow: number): void {
    if (row.children.length === 0) {
      this.deleteRowFromBasket(positionRow, idRow);
    } else {
      this.removeClassOfActiveRow(row);
      this.errorMessage.next('Row are not empty! Delete Elements in row and after delete row!');
      setTimeout(() => this.popupError.fire(), 0);
    }
  }

  setActiveRow(row: HTMLElement): void {
    if (row.classList.contains('active-row')) {
      this.removeClassOfActiveRow(row);
    } else {
      this.addClassToTargetRow(row);
    }
  }

  removeClassOfActiveRow(row: HTMLElement): void {
    row.classList.remove('active-row');
    this.deleteRowBtnStatus = true;
    this.store.dispatch(new SetTargetRowAction({ id: null }));
  }

  addClassToTargetRow(row: HTMLElement): void {
    this.listRows.toArray().forEach(el => {
      el.nativeElement.classList.remove('active-row');
    })
    row.classList.add('active-row');
    this.deleteRowBtnStatus = false;
    this.store.dispatch(new SetTargetRowAction({ id: Number(row.id) }));
  }
  /**
   * End Row Actions ================================================================
   */

  /**
   * Elem Actions ===================================================================
   */
  setActiveElem(elem: any): void {
    if (elem.parentNode.classList.contains('active-elem-form')) {
      this.removeClassOfActiveElem(elem);
    } else {
      this.addClassToTargetElem(elem);
    }
  }

  removeClassOfActiveElem(elem: any): void {
    elem.parentNode.classList.remove('active-elem-form');
    this.deleteElemBtnStatus = true;
    this.store.dispatch(new SetTargetElemAction({ id: null }));
  }

  addClassToTargetElem(elem: any): void {
    this.listElems.toArray().forEach(el => {
      el.nativeElement.classList.remove('active-elem-form');
    })
    elem.parentNode.classList.add('active-elem-form');
    this.deleteElemBtnStatus = false;
    this.store.dispatch(new SetTargetElemAction({ id: Number(elem.dataset.id) }));
  }

  deleteElem(): void {
    const elem = this.listElems.toArray().find(el => el.nativeElement.classList.contains('active-elem-form')).nativeElement;
    const elemId = Number(elem.dataset.id);
    const containerElem = elem.parentNode;

    containerElem.remove();
    this.deleteElemFromBasket(elemId);
    this.store.dispatch(new SetTargetElemAction({ id: null }));
  }

  addElemToBasket(event: CdkDragDrop<any[]>, containerID: number): void {
    if (this.basket[containerID].length < 4) {
      const data = {
        character: event.previousContainer.data[event.previousIndex].character,
        id: this.counterID
      };
      this.basket[containerID].push(data);
      this.store.dispatch(new SetNewElemAction({ type: data.character, id: this.counterID }));
      this.counterID++;
    } else {
      this.errorMessage.next('Maximum 4 elements in row!');
      setTimeout(() => this.popupError.fire(), 0);
    }
  }

  deleteElemFromBasket(elemId: number): void {
    this.basket.forEach((_, i) => {
      this.basket[i] = this.basket[i].filter(el => el.id !== elemId);
    })
    this.store.dispatch(new DeleteElemAction({ id: elemId }));
    this.deleteElemBtnStatus = true;
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
