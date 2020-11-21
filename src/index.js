// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// import {createStore} from "redux"  // this is used by "let store = createStore(reducer)"

// // Redux For Beginners | React Redux Tutorial: https://www.youtube.com/watch?v=CVpUuw9XSjY&ab_channel=DevEd
// // STORE: This is a globalised state that stores the data which we can access from any component
// // ACTION: This describes what we want to do. Doesn't actually do it. It is a function that returns an object
// // REDUCER: This describes how our actions transform the state into the next state. It is another function.
// //          When a action is called, the reducer is going to check what action was called. Depending on the action, it will modify the store.
// // DISPATCH: This is the way the action is executed. Basically says DISPATCH this ACTION to the REDUCER 
// // ACTION is sent to REDUCER, which check what to do and updates the STORE accordingly

// // // ACTION INCREMENT
// // const increment = () => {
// //   return {
// //     type: 'INCREMENT' // basically the name
// //   }
// // }
// // const decrement = () => {
// //   return {
// //     type: 'DECREMENT' // basically the name
// //   }
// // }

// // // REDUCER
// // const counter = (state = 0, action) => {  // initial state is false
// //   switch(action.type){
// //     case "INCREMENT":
// //       return state + 1;
// //     case "DECREMENT":
// //       return state -1;
// //     default:
// //       return state;
// //   }
// // }

// // // STORE
// // let store = createStore(counter)
// // store.subscribe(() => console.log(store.getState())); // console log store, not relating to Redux

// // // DISPATCH
// // store.dispatch(increment());

// // ReactDOM.render(
// //   <React.StrictMode>
// //     <div className="App">
// //       <h1>Hello</h1>
// //     </div>
// //   </React.StrictMode>,
// //   document.getElementById('root')
// // );

// Guy in vid like to create his store in index.js and separate each reducer and action into individual file
import React from 'react'; 
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from "redux"
import allReducer from "./reducers" // do not need to add index as webpack will look for the index in this folder
import {Provider} from "react-redux" // this connects our global state, store, to our react app

// redux dev tool part added for chrome extention
// https://github.com/zalmoxisus/redux-devtools-extension
// https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related

const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
