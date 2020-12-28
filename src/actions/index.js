import { combineReducers } from "redux";

const rootReducer = combineReducers({
  state: (state = {}) => state,
});

export default rootReducer;

// Possibly for index.js in reducers
// import { combineReducers } from "redux";
// import { reducer as form } from "redux-form";
// import HeaderNavbar from "./headernavbarReducer";

// const rootReducer = combineReducers({
//   form,
//   HeaderNavbar,
// });

// export default rootReducer;
