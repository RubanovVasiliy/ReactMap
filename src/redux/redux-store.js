import {createStore, combineReducers, applyMiddleware} from 'redux'
import mapReducer from "./map-reducer";
import {logger} from "redux-logger/src";
import thunk from "redux-thunk";

let rootReducer = combineReducers({
    map: mapReducer
})

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(logger, thunk)))

export default store