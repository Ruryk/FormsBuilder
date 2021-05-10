import { IUserAuth } from 'src/app/data/interfaces';

export const selectStatusAuth = (state: IUserAuth): boolean => state.authentication;
