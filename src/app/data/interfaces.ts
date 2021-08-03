export interface ITargetId {
  targetRowId: number;
  targetElementId: number;
}

export interface IBtnStatus {
  deleteElementBtnStatus: boolean;
  deleteRowBtnStatus: boolean;
}

export interface IUserAuth {
  email: string;
  token: string;
  authentication: boolean;
  error: string;
}

export interface IUser {
  email: string;
  password: string;
}

export interface IListElements {
  character: string;
  id?: number;
  text?: string;
}

export interface IListElementStyleState {
  id?: {
    character: string;
    placeholder?: string;
    required?: boolean;
    text?: string;
    type?: string;
    name?: string;
    value?: string;
    label?: string;
    option?: string[],
    defaultOption?: string,
    styles: {
      width?: string;
      height?: string;
      borderWidth?: string;
      color?: string,
      borderStyle?: string;
      borderColor: string;
      fontSize?: string;
      fontWeight?: string;
      backgroundColor?: string;
    }
  }
}

export interface IListRowStyleState {
  id?: {
    id: number;
    minHeight: string;
    flexDirection: string;
    justifyContent: string;
    alignItems: string;
  }
}

export interface IListFormStyleState {
  borderStyle?: string;
  borderColor?: string;
  fontSize?: string;
  borderWidth?: string;
  backgroundColor?: string;
  color?: string;
  width: string;
}

export interface IStylesElementsForm {
  placeholderText?: string;
  width: number;
  height: number;
  required?: boolean;
  borderStyle: string;
  fontSizeInput?: number;
  fontWeightSelect?: number;
  colorInputRGB?: string;
}

export interface IListStandartParams {
  character: string;
  placeholder?: string;
  required?: boolean;
  text?: string;
  type?: string;
  name?: string;
  value?: string;
  label?: string;
  options?: string[],
  defaultOption?: string,
  styles: {
    width?: string;
    height?: string;
    borderWidth?: string;
    color?: string,
    borderStyle?: string;
    borderColor: string;
    fontSize?: string;
    fontWeight?: string;
    backgroundColor?: string;
  };
}
