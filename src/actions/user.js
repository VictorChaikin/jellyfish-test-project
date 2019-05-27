import { USER_NAME } from './action-types';

export default function (name) {
  console.log(name);
  return dispatch => dispatch({
    type: USER_NAME,
    name
  })
}
