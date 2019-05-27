import {USER_NAME} from '../actions/action-types';

const INITIAL_STATE = {
  name: ''
};

export default function (state = INITIAL_STATE, action) {
  if(action.type === USER_NAME){
    return { ...state, name: action.name}
  } else {
    return state;
  }
}
