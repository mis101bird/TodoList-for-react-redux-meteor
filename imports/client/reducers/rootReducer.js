import { combineReducers } from 'redux';
import visibilityFilter from './visibilityRedudcer';
import pageSkip from './pageSkipReducer';

const rootReducer = combineReducers({ //組合Reducer
    visibilityFilter,
    pageSkip
});

export default rootReducer;