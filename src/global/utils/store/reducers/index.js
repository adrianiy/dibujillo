import { combineReducers } from 'redux';
import user from './user';
import toaster from './toaster';

const rooReducer = combineReducers({
    user,
    toaster,
});

export default rooReducer;
