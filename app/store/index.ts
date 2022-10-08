import {
  AnyAction,
  combineReducers,
  configureStore,
  Reducer,
} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';

import counterSlice from './counter.slice';

const combinedReducer = combineReducers({
  counter: counterSlice,
});

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  // reset store when logout
  if (action.type === 'logout') {
    state = {} as RootState;
  }
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
