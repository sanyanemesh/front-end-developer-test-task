import { createStore, combineReducers } from 'redux';
import goodReducer from './good';
import cartReducer from './cart';

export const getGoods = (state: RootState) => state.goods;

export const getCart = (cart: RootState) => cart.cartReducer;

const rootReducer = combineReducers({
  goods: goodReducer,
  cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
