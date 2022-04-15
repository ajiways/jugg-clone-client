import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import progressReducer from "./reducers/progressSlice";
import objectsReducer from "./reducers/objectsSlice";

const rootReducer = combineReducers({
   userReducer,
   progressReducer,
   objectsReducer,
});

export const setupStore = () => {
   return configureStore({
      reducer: rootReducer,
   });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
