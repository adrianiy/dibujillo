import { createStore } from 'redux';
import rooReducer from './reducers';

const store = createStore(
    rooReducer,
    /* istanbul ignore next */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
