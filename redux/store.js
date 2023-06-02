import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as AppReducer } from "./App/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ App: AppReducer });

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
