import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  initialState: {
    isLoggedIn: false,
    lastVisitedAt: null,
    grade: null,
    profile: {
      nickname: null,
      age: null,
      location: null,
      avatar: null,
      experiences: [],
    },
    friends: [],
    likedGoods: [],
  },
  name: "user2222",
  reducers: {
    toggleLogin(state, action) {
      state.isLoggedIn = !state.isLoggedIn;
    },
    updateExperience(state, action) {
      const { id, data } = action;
      const experienceIndexToUpdate = state.profile.experiences.findIndex(
        (experience) => experience.id === id
      );
      state.profile.experiences[experienceIndexToUpdate] = data;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { toggleLogin } = userSlice.actions;
// 각각이 액션크리에이터에요.
