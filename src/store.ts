import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { calculatorReducer } from "./reducers/calculatorReducer";

const store = createStore(
  calculatorReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
