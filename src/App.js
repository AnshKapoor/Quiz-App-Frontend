import "./App.css";
import Quiz from "./Quiz";

import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { fetchDataWithRedux } from "./store/actions/index";
import { bindActionCreators } from "redux";
require("dotenv").config();
function mapStateToProps(state) {
  return {
    Quiz: state,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchDataWithRedux: fetchDataWithRedux,
    },
    dispatch
  );
}
function App(props) {
  console.log("Props are " + JSON.stringify(props));
  useEffect(() => {
    props.fetchDataWithRedux();
  }, []);
  return (
    <>
      <Quiz />
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
