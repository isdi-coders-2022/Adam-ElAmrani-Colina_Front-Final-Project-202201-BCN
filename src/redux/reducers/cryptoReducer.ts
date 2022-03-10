import { AnyAction } from "redux";
import Crypto from "../../interfaces/Crypto";
import { Cryptos } from "../../interfaces/cryptoProps";
import actionTypes from "../actions/actionTypes";

const cryptoReducer = (coinState: Crypto[] = [], action: AnyAction) => {
  let newCryptoState: Cryptos;
  switch (action.type) {
    case actionTypes.loadCoins:
      if (action.payload) {
        newCryptoState = [...action.payload];
      } else {
        newCryptoState = [...coinState];
      }
      break;
    default:
      newCryptoState = [...coinState];
  }
  return newCryptoState;
};

export default cryptoReducer;
