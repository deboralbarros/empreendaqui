import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import entrepreneursReducer from "./modules/entrepreneurs/reducer";
import providersReducer from "./modules/providers/reducer";

const reducers = combineReducers({
  entrepreneurs: entrepreneursReducer,
  providers: providersReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
