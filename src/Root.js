import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";

import App from "./App";

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;
