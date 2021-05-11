import { IListElemStyleState } from 'src/app/data/interfaces';

export const selectParamsElemForId = (state: IListElemStyleState[], props: any): any => state.filter(el => el.id === props.id);

export const selectParamsElem = (state: IListElemStyleState[]): any => state;
