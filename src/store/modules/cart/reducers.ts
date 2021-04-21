import { Reducer } from 'redux';

import { ICartState } from './types';

const INICIAL_STATE: ICartState = {
  items: []
};

const cart: Reducer<ICartState> = (state = INICIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART': {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default cart;
