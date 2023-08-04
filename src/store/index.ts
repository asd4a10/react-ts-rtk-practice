import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import userReducer from "./reducers/UserSlice";
import { postAPI } from "../services/PostService";
import { userAPI } from "../services/UserService";
import { careerAPI } from "../modules/careers/services/CareerService";

const rootReducer = combineReducers({
  // userReducer,
  [postAPI.reducerPath]: postAPI.reducer,
  [userAPI.reducerPath]: userAPI.reducer,
  [careerAPI.reducerPath]: careerAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(postAPI.middleware)
        .concat(userAPI.middleware)
        .concat(careerAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
