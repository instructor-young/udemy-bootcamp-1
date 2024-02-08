import { createSlice } from "@reduxjs/toolkit";

type UtilsStore = {
  modal: React.ReactElement | null;
};

const initialState: UtilsStore = {
  modal: null,
};

const utilsSlice = createSlice({
  initialState,
  name: "users",
  reducers: {
    setModal: (
      state,
      action: { type: string; payload: UtilsStore["modal"] }
    ) => {
      state.modal = action.payload;
    },
  },
});

export const utilsReducer = utilsSlice.reducer;
export const { setModal } = utilsSlice.actions;
