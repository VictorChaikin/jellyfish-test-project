import { GET_BITCOIN_VALUE } from './action-types';
import {URLS} from '../config/urls';

export function bitCoinValue(currency) {
  return dispatch =>fetch(URLS.fetchBitCoin(currency.shortHand))
      .then(res => res.json())
      .then(data => dispatch({
        type: GET_BITCOIN_VALUE,
        data: data.last,
        currency
      }))
      .catch(() => dispatch({
        type: GET_BITCOIN_VALUE,
        error: true
      }))
}
