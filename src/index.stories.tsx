import * as React from 'react'
import { useDispatch, Provider, useSelector } from 'react-redux';
import PriceCard from './'
import { API } from './helpers/api';
import { initGood } from './store/good';
import store, { getGoods } from './store';

const Regular: React.FC = () => (
  <>
  <Provider store={store}>
    <App />
  </Provider>
  </>
)

const App: React.FC = () => {
  const dispatch = useDispatch();

  const initData = () => {
    dispatch(initGood(API))
  }

  React.useEffect(() => {
    initData();
  }, []);

  const goods = useSelector(getGoods);

  return (
    <>
      {goods.map(good =>
      <PriceCard good={good}/>)
      }
    </>
  )
}

export { Regular }

export default {
  title: 'Common/PriceCard',
}
