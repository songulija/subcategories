import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { categoriesReducer } from './reducers/categoriesReducer';

// combine all reducers into one. give different name to reducer if you want
const allReducers = combineReducers({
    categories: categoriesReducer
})

//add all middleware to array of middlewares
const middlewares = [thunk];

//create global state(store). pass reducer(allReducers). compose it with devtools and applyMiddleware to it
const store = createStore(allReducers, composeWithDevTools(applyMiddleware(...middlewares)))

export default store