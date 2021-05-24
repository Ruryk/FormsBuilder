import { ITargetId } from 'src/app/data/interfaces';

export const selectRowId = (state: ITargetId): number => state.targetRowId;

export const selectElementId = (state: ITargetId): number => state.targetElemId;