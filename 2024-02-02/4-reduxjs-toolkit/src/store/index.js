import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user.reducer";

const store = configureStore({
  reducer: {
    user3333: userReducer,
  },
});

export default store;
