import * as React from 'react'
import { AddToCartForm , AddToCartFormContainer, PriceOption, SubmitContainer, SubmitPrice, SubmitButton, ButtonImage, SubmitButtonText, Title, GlobalStyles, Input, Label } from './styles';

import { useDispatch } from 'react-redux';
import { setToCart } from './store/cart';
import { Good } from './store/good';

type Props = { good: Good };

const PriceCard: React.FC<Props> = ({ good }) => {
  const [goodId, setGoodId] = React.useState('')
  const [radio, setRadio] = React.useState('')

  const dispatch = useDispatch();
  const API = good;
  const defaultChecked = API.prices[0];

  React.useEffect(() => {
    setRadio(defaultChecked)
    setGoodId(good.id)
  }, [API.prices.length])

  const addToCart = (goodCart: Good) => {
      dispatch(setToCart(goodCart));
  };

  return (
  <>
  <GlobalStyles />
  <AddToCartForm>
    <form>
      <AddToCartFormContainer>
        <Title>Тип </Title>
        <Title>Ціна</Title>
      </AddToCartFormContainer>
      {API.prices.map((el, i) => (
              <PriceOption>
                <Input
                  type="radio"
                  checked={radio === el}
                  id={i.toString()}
                  value={el}
                  onChange={(el) => {setRadio(el.target.value)}}
                />
                <label htmlFor={i.toString()}>
                  <Label>
                    <div>{el} г</div>
                    <div>{el} грн</div>
                  </Label>
                </label>
              </PriceOption>
        )
      )}
      <SubmitContainer>
        <SubmitPrice>
          {radio} грн
        </SubmitPrice>
        <SubmitButton
        type="button"
        onClick={() => {
          const onePrice:string[] = [];
          onePrice.push(radio)

          const preparedGood = {
            good: API,
            id: goodId,
            prices: onePrice,
          };
          addToCart(preparedGood)
        }}
        >
          <ButtonImage src={ require('./img/supermarket1.svg')}/>
          <SubmitButtonText>
            До кошика
          </SubmitButtonText>
        </SubmitButton>
      </SubmitContainer>
    </form>
  </AddToCartForm>
  </>
  )
};

export default PriceCard
