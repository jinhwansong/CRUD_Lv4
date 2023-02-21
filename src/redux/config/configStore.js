
import { combineReducers, createStore } from 'redux'
import passion from '../modules/passion'
const rootReducer = combineReducers({
    passion:passion
})
const store = createStore(rootReducer)


export default store