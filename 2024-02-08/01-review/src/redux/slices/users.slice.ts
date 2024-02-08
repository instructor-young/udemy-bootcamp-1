import { Profile } from "@/types/Profile.type";
import { createSlice } from "@reduxjs/toolkit";

type UsersStore = {
  profile: Profile | null;
};

const initialState: UsersStore = {
  profile: null,
};

const usersSlice = createSlice({
  initialState,
  name: "users",
  reducers: {
    setProfile: (state, action: { type: string; payload: Profile | null }) => {
      state.profile = action.payload;
    },
  },
});

export const usersReducer = usersSlice.reducer;
export const { setProfile } = usersSlice.actions;
