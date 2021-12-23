import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Question from "./Question";
import "./styles/mcq.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { connect } from "react-redux";
import { setDisplay } from "./store/actions/index";
import { bindActionCreators } from "redux";

function mapStateToProps(state) {
  return {
    Questions: state.quizApp.questionsAndAnswers,
    visible: state.display.show,
    pause: state.display.pause,
    key: state.display.key,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setDisplay: setDisplay,
    },
    dispatch
  );
}
const Quiz = (props) => {
  useEffect(() => {
    props.setDisplay();
  }, []);

  return (
    <>
      <div style={{ display: props.visible ? "block" : "none" }}>
        <div>
          <div className="time">
            <CountdownCircleTimer
              isPlaying={props.pause}
              key={props.key}
              duration={10}
              colors={[
                ["#004777", 0.33],
                ["#F7B801", 0.33],
                ["#A30000", 0.33],
              ]}
            >
              {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
          </div>
        </div>
        <Question data={props.Questions} type="mcq" />
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
