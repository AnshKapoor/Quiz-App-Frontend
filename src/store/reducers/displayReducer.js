import {
  CHANGE_PAUSE,
  HIDE_UI,
  INCREMENT_KEY,
  SHOW_UI,
} from "../actions/types";
let initialstate = {
  show: false,
  pause: false,
  key: 0,
};
let temp;
const displayReducer = (state = initialstate, action) => {
  switch (action.type) {
    case HIDE_UI:
      let newstate = Object.assign({}, state);
      newstate.show = false;
      return newstate;
    case SHOW_UI:
      let diffstate = Object.assign({}, state);
      diffstate.show = true;
      return diffstate;
    case CHANGE_PAUSE:
      temp = Object.assign({}, state);
      temp.pause = !temp.pause;
      return temp;
    case INCREMENT_KEY:
      temp = Object.assign({}, state);
      temp.key++;
      return temp;

    default:
      return state;
  }
};
export default displayReducer;
