import { IListElementStyleState } from 'src/app/data/interfaces';

export const selectParamsElementForId = (state: IListElementStyleState, props: any): any => state[props.id];

export const selectParamsElement = (state: IListElementStyleState): any => state;
