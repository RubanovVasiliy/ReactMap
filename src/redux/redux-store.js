import { createStore, combineReducers}  from 'redux'
import mapReducer from "./map-reducer";

let reducers = combineReducers({
    map: mapReducer
})

const store = createStore(reducers)

export default store