import { combineReducers } from 'redux';
import visibilityFilter from '../../../imports/client/reducers/visibilityFilter';
import pageSkip from '../../../imports/client/reducers/pageSkip';

const rootReducer = combineReducers({ //組合Reducer
    visibilityFilter,
    pageSkip
});

export default rootReducer;