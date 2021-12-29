import { combineReducers, createStore, thunk, applyMiddleware, compose } from 'libraries';
import driverReducer from "./driver/reducer";

const composeEnhancers = (process.env.NODE_ENV === 'development' ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] : null) || compose;

/**
 * reducer
 */
export const reducer = combineReducers({
    driver: driverReducer,
});

/**
 * store
 */
export const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));

/**
 * dispatcher
 */
export * from './driver/action';

/**
 * selector
 */
export * from './driver/selector';