import React from "react";
import { useState } from "react";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";
import "../styles/mcq.css";
const Mcq = (props) => {
  const [ans, setans] = useState(0);
  const check = () => {
    props.changer(true);
    if (ans == props.data.A) {
      store.addNotification({
        title: "Correct",
        message: "Your answer is correct",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 1000,
          onScreen: true,
        },
      });
    } else {
      store.addNotification({
        title: "Wrong",
        message: "Your answer is incorrect. Correct answer is " + props.data.A,
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 1000,
          onScreen: true,
        },
      });
    }
  };
  let ques;
  let options;
  let arr = [];
  const changeOption = (e) => {
    console.log(e.target.value);
    setans(e.target.value);
  };

  ques = <div>Question: {props?.data?.Q}</div>;
  for (var key in props?.data?.O) {
    arr.push({ o: key, val: props?.data?.O[key] });
  }
  options = arr.map((e) => {
    return (
      <>
        <input type="radio" value={e.o} name="abc" />
        <label for={e.val}>{e.val}</label>

        <br />
      </>
    );
  });

  return (
    <>
      <div id="container">
        <div id="question">{ques}</div>
        <div onChange={changeOption}>{options}</div>
        <button className="button-18" role="button" onClick={check}>
          Next Question
        </button>
      </div>

      <ReactNotification />
    </>
  );
};
export default Mcq;
