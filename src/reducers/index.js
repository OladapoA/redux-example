import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import {combineReducers} from "redux";

// you need to combine the reducers if you have multiple
const allReducers = combineReducers({
    // counterReducer       // if you have just one, it is ES6 syntax for counterReducer: counterReducer
    counter: counterReducer, // you can name this whatever you want
    isLogged: loggedReducer
});

export default allReducers