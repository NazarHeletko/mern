import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./reducers/root-reducer"
import thunk from "redux-thunk";


export let store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))