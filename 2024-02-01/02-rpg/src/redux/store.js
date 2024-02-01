import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "./reducers/character.reducer";

const store = configureStore({ reducer: { character: characterReducer } });

export default store;
