import {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk";
import rootReducers from "./reducers"
import { setPassword, fetchUsers } from '../actions'

const middleWare = [thunk]

const store = createStore(rootReducers, 
                    composeWithDevTools(applyMiddleware(...middleWare)))

export default store