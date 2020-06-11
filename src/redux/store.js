import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { appReducer } from "./appReducer";
import { listReducer } from "./listReducer";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
  app: appReducer,
  posts: listReducer,
  form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
