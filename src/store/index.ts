import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/UserSlice";
import { postAPI } from "../services/PostService";
import { vacancyAPI } from "../modules/vacancy/services/VacancyService";
import { userAPI } from "../services/UserService";

const rootReducer = combineReducers({
  // userReducer,
  [postAPI.reducerPath]: postAPI.reducer,
  [vacancyAPI.reducerPath]: vacancyAPI.reducer,
  [userAPI.reducerPath]: userAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(postAPI.middleware)
        .concat(userAPI.middleware)
        .concat(vacancyAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
