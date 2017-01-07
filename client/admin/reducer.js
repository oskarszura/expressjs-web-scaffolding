import { combineReducers } from 'redux';
import colours from './colours/reducers';
import generator from './generator/reducers';

const rootReducer = combineReducers({
  colours,
  generator,
})

export default rootReducer;
