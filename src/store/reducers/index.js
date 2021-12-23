import { combineReducers } from "redux";
import quizReducer from "./quizReducer";
import displayReducer from "./displayReducer";
const rootReducer = combineReducers({
  quizApp: quizReducer,
  display: displayReducer,
});

export default rootReducer;
