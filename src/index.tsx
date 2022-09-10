import * as React from "react";
import { render } from "react-dom";
import { Provider, useSelector } from "react-redux";
import { store } from "./rootReducer";
import { useModifiedSelector } from "./modifiedHooks";
const App = () => {
  const { count } = useModifiedSelector((state) => state.counter);

  return <div>{count}</div>;
};

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
