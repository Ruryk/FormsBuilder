import { ElementRef, Injectable, QueryList } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

import { SetTargetElementAction } from 'src/app/reducers/target/target.actions';
import { EBuilderElements } from 'src/app/data/enums';
import { DeleteElementAction, SetNewElementAction } from 'src/app/reducers/element-styles/element-styles.actions';
import { IStateReducers } from 'src/app/reducers';
import { IBtnStatus, IListElements } from 'src/app/data/interfaces';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ElemActionService {

  public counterID: number = 0;

  constructor(private store: Store<IStateReducers>) { }

  setActiveElem(
    elem: any,
    deleteBtnStatus: IBtnStatus,
    listElems: QueryList<ElementRef>
  ): void {
    if (elem.parentNode.classList.contains('active-elem-form')) {
      this.removeClassOfActiveElem(elem, deleteBtnStatus);
    } else {
      this.addClassToTargetElem(elem, deleteBtnStatus, listElems);
    }
  }

  removeClassOfActiveElem(
    elem: any,
    deleteBtnStatus: IBtnStatus
  ): void {
    elem.parentNode.classList.remove('active-elem-form');
    deleteBtnStatus.deleteElemBtnStatus = true;
    this.store.dispatch(new SetTargetElementAction({ id: null }));
  }

  addClassToTargetElem(
    elem: any,
    deleteBtnStatus: IBtnStatus,
    listElems: QueryList<ElementRef>
  ): void {
    if (elem.localName === EBuilderElements.Select) {
      listElems.toArray().forEach(el => {
        el.nativeElement.parentNode.classList.remove('active-elem-form');
        el.nativeElement.classList.remove('active-elem-form');
      });
      elem.parentNode.parentNode.classList.add('active-elem-form');
    } else {
      listElems.toArray().forEach(el => {
        el.nativeElement.classList.remove('active-elem-form');
      });
      elem.parentNode.classList.add('active-elem-form');
    }
    deleteBtnStatus.deleteElemBtnStatus = false;
    this.store.dispatch(new SetTargetElementAction({ id: Number(elem.dataset.id) }));
  }

  deleteElem(
    basket: Array<IListElements[]>,
    listElems: QueryList<ElementRef>,
    deleteBtnStatus: IBtnStatus,
    formGroup: FormGroup
  ): void {
    const elem = listElems.toArray().find(el => el.nativeElement.classList.contains('active-elem-form')).nativeElement;
    const elemId = Number(elem.dataset.id);
    const containerElem = elem.parentNode;

    console.log(elem.firstElementChild.getAttribute('ng-reflect-name'));


    formGroup.removeControl(`${elem.firstElementChild.getAttribute('ng-reflect-name')}`);

    containerElem.remove();
    this.deleteElemFromBasket(elemId, basket, deleteBtnStatus);
    this.store.dispatch(new SetTargetElementAction({ id: null }));
  }

  addElemToBasket(
    event: CdkDragDrop<any[]>,
    basket: Array<IListElements[]>,
    containerID: number,
    message: BehaviorSubject<string>,
    errorPopup: SwalComponent
  ): void {
    if (basket[containerID].length < 4) {
      const data = {
        character: event.previousContainer.data[event.previousIndex].character,
        id: this.counterID
      };
      basket[containerID].push(data);
      this.store.dispatch(new SetNewElementAction({ type: data.character, id: this.counterID }));
      this.counterID++;
    } else {
      message.next('Maximum 4 elements in row!');
      setTimeout(() => errorPopup.fire(), 0);
    }
  }

  deleteElemFromBasket(
    elemId: number,
    basket: Array<IListElements[]>,
    deleteBtnStatus: IBtnStatus
  ): void {
    basket.forEach((_, i) => {
      basket[i] = basket[i].filter(el => el.id !== elemId);
    });
    this.store.dispatch(new DeleteElementAction({ id: elemId }));
    deleteBtnStatus.deleteElemBtnStatus = true;
  }
}
