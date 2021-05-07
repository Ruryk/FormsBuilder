import { HttpHeaders } from '@angular/common/http';

export const CPxNamesStyles = [
   "width",
   "height",
   "borderWidth",
   "color", ,
   "borderStyle",
   "fontSize",
   "fontWeight",
   "backgroundColor",
   "borderColor"
];

export const ChttpOptions = {
   headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token'
   })
};

export const CListStandartParams = {
   button: {
      character: "button",
      styles: {
         width: "127px",
         height: "36px",
         borderStyle: "solid",
         borderWidth: "1px",
         color: "black",
         backgroundColor: "transparent",

         borderRadius: "5px",
         borderColor: "black",
         cursor: "pointer"
      },
      text: "ButtonStandart",
      type: "submit"
   },
   input: {
      character: "input",
      styles: {
         padding: "5px 10px",
         width: "150px",
         height: "25px",
         borderStyle: "solid",
         borderColor: "black",
         borderWidth: "1px",
         color: "red",
         backgroundColor: "",
         fontSize: "14px"
      },
      name: "TestName",
      type: "text",
      placeholder: "InputPlaceholder"
   },
   textarea: {
      character: "textarea",
      styles: {
         padding: "5px 10px",
         width: "150px",
         height: "25px",
         borderStyle: "solid",
         borderColor: "black",
         borderWidth: "1px",
         color: "red",
         backgroundColor: "",
         fontSize: "14px"
      },
      name: "TestName",
      text: "",
      placeholder: "TextAreaPlaceholder"
   },
   select: {
      character: "select",
      styles: {
         width: "170px",
         height: "40px",
         borderStyle: "solid",
         borderWidth: "1px",
         color: "black",
         backgroundColor: "",
         fontWeight: "normal"
      },
      options: ["One", "Two", "Three"],
      defaultOption: "Select an option",
      name: "TestName",
      required: false
   },
   checkbox: {
      character: "checkbox",
      styles: {
         width: "70px",
         height: "30px"
      },
      name: "TestName",
      value: "Test Checked",
      label: "Checked Me!"
   }
}


export const СArrPxStyles: string[] = ["width", "height", "borderWidth", "fontSize"];