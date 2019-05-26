import { GET_BITCOIN_VALUE } from '../actions/action-types';

const INITIAL_STATE = {
  price: 0,
  currency: '',
  shorthand: '',
  message: 'Something went wrong please try again later',
  error: false
};

export default function (state = INITIAL_STATE, action) {
  if (action.type === GET_BITCOIN_VALUE) {
    return {
      ...state,
      price: action.data || state.price,
      currency: action.currency.label || state.currency,
      shorthand: action.currency.shortHand || state.shorthand,
      error: action.error || state.error
    };
  } else {
    return state;
  }
}
