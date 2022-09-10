import { useSelector } from "react-redux";
import { combineReducers, createStore } from "redux";
import { counterReducer } from "./reducers";
const rootReducer = combineReducers({
  counter: counterReducer
});
// customs selectors
export type RootReducerType = ReturnType<typeof rootReducer>;
// const useModifiedSelector: any = useSelector;

export const store = createStore(rootReducer);
