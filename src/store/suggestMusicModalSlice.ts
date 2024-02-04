import { createSlice } from '@reduxjs/toolkit';

interface ModalState {
  isOpened: boolean;
}

const initialState: ModalState = {
  isOpened: false,
};

const modalSlice = createSlice({
  name: 'suggestMusic',
  initialState,
  reducers: {
    openModal: (state: ModalState) => {
      state.isOpened = true;
    },
    closeModal: (state: ModalState) => {
      state.isOpened = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
