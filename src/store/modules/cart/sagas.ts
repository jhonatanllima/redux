import { all, takeLatest, select } from 'redux-saga/effects'

import { StateProps } from '../..';

import { addProductToCart } from './actions'

type CheckProductStockRequest = ReturnType<typeof addProductToCart>

function* checkProductStock({ payload }: CheckProductStockRequest) {
  const { product } = payload;

  const currentQuantity: number = yield select((state: StateProps) => {
    return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0;
  });

  console.log('currentQuantity', currentQuantity);
}

export default all([
  takeLatest('ADD_PRODUCT_TO_CART', checkProductStock)
]);