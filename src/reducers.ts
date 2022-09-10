const initialCountState = {
  count: 0
};
export const counterReducer = (state = initialCountState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1
      };
    default:
      return state;
  }
};

// export default theDefaultReducer = (state = 0, action) => state;

// export const firstNamedReducer = (state = 1, action) => state;

// export const secondNamedReducer = (state = 2, action) => state;

// rootReducer.js

// import theDefaultReducer, {
//   firstNamedReducer,
//   secondNamedReducer
// } from "./reducers";

// Use ES6 object literal shorthand syntax to define the object shape
// const rootReducer = combineReducers({
//   theDefaultReducer,
//   firstNamedReducer,
//   secondNamedReducer
// });

// const store = createStore(rootReducer);
// console.log(store.getState());
