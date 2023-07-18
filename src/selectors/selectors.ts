import { RootState } from '../infrastructure/store';

export const modalIsOpened = (state: RootState) => state.modal.isOpened;
