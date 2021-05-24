import { IListElementStyleState } from 'src/app/data/interfaces';

export const selectParamsElemForId = (state: IListElementStyleState[], props: any): any => state.filter(el => el.id === props.id);

export const selectParamsElem = (state: IListElementStyleState[]): any => state;
