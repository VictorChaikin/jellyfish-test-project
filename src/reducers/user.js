import {USER_NAME} from '../actions/action-types';

const INITIAl_STATE = {
  name: ''
};

export default function (state = INITIAl_STATE, action) {
  if(action.type === USER_NAME){
    return { ...state, name: action.name}
  } else {
    return state;
  }
}
