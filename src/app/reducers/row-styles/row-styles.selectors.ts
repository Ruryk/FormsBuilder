import { IListRowStyleState } from 'src/app/data/interfaces';

export const selectParamsRowForId = (state: IListRowStyleState, props: { id: number }): IListRowStyleState => state[props.id];

export const selectParamsRow = (state: IListRowStyleState): IListRowStyleState => state;