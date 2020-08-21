import { createStore } from "redux";
import rooReducer from "./reducers";

export const store = createStore(
    rooReducer,
    /* istanbul ignore next */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
