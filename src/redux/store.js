import {applyMiddleware, combineReducers, createStore} from 'redux';
import HomeReducer from './reducers/HomeReducer';
import {thunk} from 'redux-thunk';

const rootReducer = combineReducers({
  Home: HomeReducer,
});

const middlewares = [thunk]; // Ensure thunk is properly imported and defined
const middlewareEnhancer = applyMiddleware(...middlewares);

// If you only have middleware, you might not need compose
const composedEnhancers = middlewareEnhancer;

const store = createStore(rootReducer, composedEnhancers);

export default store;
