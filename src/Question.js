import React from "react";
import { useEffect } from "react";
import { bindActionCreators } from "redux";
import {
  setDisplay,
  ChangePause,
  IncrementIndex,
  IncrementKey,
} from "./store/actions/index";
import { connect } from "react-redux";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Mcq from "./Types/Mcq";
function mapStateToProps(state) {
  return {
    visible: state.display.show,
    currindex: state.quizApp.currindex,
    key: state.display.key,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setDisplay: setDisplay,
      ChangePause: ChangePause,
      Increment: IncrementIndex,
      IncrementKey: IncrementKey,
    },

    dispatch
  );
}
const Question = (props) => {
  useEffect(() => {
    console.log("The current question is" + props?.data[props.currindex]?.Q);
    props.setDisplay();
    // props.ChangePause();
  }, []);
  console.log("Questions are" + JSON.stringify(props.data));
  return (
    <>
      <button onClick={props.ChangePause}>Click to change state</button>
      <p>{props.data ? props?.data[props?.currindex]?.Q : "Alternate"}</p>
      <button
        onClick={() => {
          props.Increment();
          props.IncrementKey();
        }}
      >
        Next Question
      </button>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
