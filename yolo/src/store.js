import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from './reducers/index';

const createBrowserHistory = require("history").createBrowserHistory;

let store = createStore(rootReducer, applyMiddleware(
    thunk,
    createLogger()
))

let history = createBrowserHistory();

export {
    store,
    history
}