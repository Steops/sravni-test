import { photosReducer } from "./reducers/photosReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { usersReducer } from "./reducers/usersReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  photos: photosReducer,
});
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
