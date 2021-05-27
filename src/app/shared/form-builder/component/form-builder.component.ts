import { Component, Input, ChangeDetectionStrategy, ElementRef, QueryList, ViewChildren, HostListener, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { BehaviorSubject } from 'rxjs';

import { BuilderElemComponent } from 'src/app/shared/form-builder/component/builder-elem/builder-elem.component';
import { IListRowStyleState, IListElementStyleState, IListFormStyleState, IListElements, IBtnStatus } from 'src/app/data/interfaces';
import { RowActionService } from 'src/app/services/row-action.service';
import { ElemActionService } from 'src/app/services/element-action.service';
import { EBuilderElements } from 'src/app/data/enums';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FormBuilderComponent implements OnInit {
  public formGroup: FormGroup;
  public formElemCounter: number = 0;
  public checkValidation: boolean = false;

  public basket: Array<IListElements[]> = [[]];

  public deleteBtnStatus: IBtnStatus = {
    deleteElemBtnStatus: true,
    deleteRowBtnStatus: true
  };

  public errorMessage: BehaviorSubject<string>;

  @Input() listStylesElement: IListElementStyleState;
  @Input() listStylesForm: IListFormStyleState;
  @Input() listStylesRow: IListRowStyleState;

  @ViewChildren('exampleList') listRows: QueryList<ElementRef>;
  @ViewChildren(BuilderElemComponent, { read: ElementRef }) listElems: QueryList<ElementRef>;

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
    private rowAction: RowActionService,
    private elemAction: ElemActionService,
    private fb: FormBuilder
  ) {
    this.errorMessage = new BehaviorSubject('');
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({});
  }

  submitForm(event: any): void {
    this.checkValidation = true;

    if (this.formGroup.valid) {
      let data = [...event.target];
      data = data.reduce((acc, item) => {
        const name = item.getAttribute('ng-reflect-name');
        (name) ? acc[name] = item.value : acc
        return acc;
      }, {});
      console.log(data);
    } else {
      console.log("Form is " + this.formGroup.status);
    }
  }

  getExampleListStyle(id: number): IListRowStyleState {
    return this.listStylesRow[id];
  }

  getRowId(order: string): number {
    return Object.keys(this.listStylesRow)[order];
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
  setActiveElem(elem: HTMLElement): void {
    this.elemAction.setActiveElem(elem, this.deleteBtnStatus, this.listElems);
  }

  deleteElem(): void {
    this.elemAction.deleteElem(this.basket, this.listElems, this.deleteBtnStatus, this.formGroup);

    this.checkValidation = false;
  }

  addElemToBasket(event: CdkDragDrop<any[]>, containerID: number): void {
    this.elemAction.addElemToBasket(event, this.basket, containerID, this.errorMessage, this.popupError);
  }

  addControl(character: string): void {
    switch (character) {
      case EBuilderElements.Button:
        this.formGroup.addControl(`name-${this.formElemCounter}`, new FormControl(null));
        break;

      case EBuilderElements.Select:
        this.formGroup.addControl(`name-${this.formElemCounter}`, new FormControl(null, [Validators.required]));
        break;

      case EBuilderElements.CheckBox:
        this.formGroup.addControl(`name-${this.formElemCounter}`, new FormControl(null, [Validators.required]));
        break;

      default:
        this.formGroup.addControl(`name-${this.formElemCounter}`, new FormControl(null, [Validators.minLength(2), Validators.required]));
        break;
    }
    this.formElemCounter++;
  }

  drop(event: CdkDragDrop<any[]>): void {
    const containerID: number = Number(event.container.element.nativeElement.dataset.position);
    if (event.previousContainer === event.container) {
      moveItemInArray(this.basket[containerID], event.previousIndex, event.currentIndex);
    } else {
      this.addElemToBasket(event, containerID);

      const character: string = event.previousContainer.data[event.previousIndex].character;
      this.addControl(character);

      this.checkValidation = false;
    }
  }

  /**
   * End Elem Actions ===================================================================
   */
}
