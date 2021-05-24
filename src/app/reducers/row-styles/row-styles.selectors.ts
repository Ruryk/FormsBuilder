import { IListRowStyleState } from 'src/app/data/interfaces';

export const selectParamsRowForId = (state: IListRowStyleState[], props: any): any => state.filter(el => el.id === props.id);

export const selectParamsRow = (state: IListRowStyleState[]): any => state;