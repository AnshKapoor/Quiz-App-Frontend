import axios from "axios";
import { INCREMENT_KEY, START_QUIZ } from "./types";
import { NEW_ROUND } from "./types";
import { ANSWER_QUESTION } from "./types";
import { NEW_QUIZ } from "./types";
import { FETCH_REQUEST } from "./types";
import { FETCH_SUCCESS } from "./types";
import { FETCH_ERROR } from "./types";
import { SHOW_UI } from "./types";
import { CHANGE_PAUSE, INCREMENT } from "./types";

const baseurl = process.env.REACT_APP_BASE_URI;
console.log("BAse url is" + baseurl);
export function startQuiz(data) {
  return {
    type: START_QUIZ,
    payload: data,
  };
}

export function newRound(data) {
  return {
    type: NEW_ROUND,
    payload: data,
  };
}

export function answerQuestion(data) {
  return {
    type: ANSWER_QUESTION,
    payload: data,
  };
}

export function newQuiz(data) {
  return {
    type: NEW_QUIZ,
    payload: data,
  };
}

function fetchDataRequest() {
  return {
    type: FETCH_REQUEST,
  };
}

function fetchDataSuccess(payload) {
  return {
    type: FETCH_SUCCESS,
    payload,
  };
}

function fetchDataError() {
  return {
    type: FETCH_ERROR,
  };
}

export function fetchDataWithRedux() {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    return fetchData().then((response) => {
      console.log("Now the respose object is" + JSON.stringify(response));
      if (response.status === 200) {
        dispatch(fetchDataSuccess(response.data));
      } else {
        dispatch(fetchDataError());
      }
    });
  };
}

async function fetchData() {
  const URL = baseurl + "/617da24c8d757b423e0ae9a8";
  const response = await axios.get(URL);
  return response;
}
export const setDisplay = () => {
  return (dispatch) => {
    dispatch(setTrueDisplay());
  };
};
const setTrueDisplay = () => {
  return {
    type: SHOW_UI,
  };
};
export const ChangePause = () => {
  return (dispatch) => {
    dispatch({ type: CHANGE_PAUSE });
  };
};
export const IncrementIndex = () => {
  return (dispatch) => {
    dispatch({ type: INCREMENT });
  };
};
export const IncrementKey = () => {
  return (dispatch) => {
    dispatch({ type: INCREMENT_KEY });
  };
};
