import { ITargetId } from 'src/app/data/interfaces';

export const selectRowId = (state: ITargetId): number => state.targetRowId;

export const selectElemId = (state: ITargetId): number => state.targetElemId;