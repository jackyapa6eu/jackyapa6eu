import { createSlice } from '@reduxjs/toolkit';

interface ModalState {
  isOpened: boolean;
  content: string | null;
}

const initialState: ModalState = {
  isOpened: true,
  content: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state: ModalState) => {
      state.isOpened = true;
    },
    closeModal: (state: ModalState) => {
      state.isOpened = false;
      state.content = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
