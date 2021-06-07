import { IListElementStyleState } from 'src/app/data/interfaces';

export const selectParamsElementForId = (state: IListElementStyleState, props: { id: number }): IListElementStyleState => state[props.id];

export const selectParamsElement = (state: IListElementStyleState): IListElementStyleState => state;
