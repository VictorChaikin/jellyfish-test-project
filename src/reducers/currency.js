import { GET_BITCOIN_VALUE } from '../actions/action-types';

const INITIAL_STATE = {
  price: 0,
  currency: '',
  shorthand: ''
};

export default function (state = INITIAL_STATE, action) {
  if (action.type === GET_BITCOIN_VALUE) {
    return { ...state, price: action.data, currency:action.currency.label, shorthand: action.currency.shortHand };
  } else {
    return state;
  }
}
