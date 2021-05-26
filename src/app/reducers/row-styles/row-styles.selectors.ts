import { IListRowStyleState } from 'src/app/data/interfaces';

export const selectParamsRowForId = (state: IListRowStyleState, props: any): any => state[props.id];

export const selectParamsRow = (state: IListRowStyleState): any => state;