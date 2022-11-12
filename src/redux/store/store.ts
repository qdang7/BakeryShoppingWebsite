import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import appReducers from "../slices/index"
const middleware = getDefaultMiddleware({
    serializableCheck: false,
});

const combinedReducer = combineReducers({
    ...appReducers
  });
  const rootReducer = (state: any, action: any) => {
    if (action.type === 'Reset') {
      state = undefined;
    }
    return combinedReducer(state, action);
  };

export const store = configureStore({
    reducer: rootReducer,
    middleware
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store