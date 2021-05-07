import { Component } from '@angular/core';

import { IListElements } from "../../data/interfaces";
import { CListStandartParams } from "../../data/constantes";
import { EBuilderElements } from "../../data/enums";

@Component({
  selector: 'app-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.scss']
})

export class FormElementsComponent {

  public EBuilderElements = EBuilderElements;

  public paramsList = CListStandartParams;

  public listElements: IListElements[] = [
    { text: "Button", character: "button" },
    { text: "Input", character: "input" },
    { text: "TextArea", character: "textarea" },
    { text: "Select", character: "select" },
    { text: "CheckBox", character: "checkbox" }
  ];
}
