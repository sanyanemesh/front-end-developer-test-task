import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

export const AddToCartForm = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.16);
  border-radius: 16px;
  min-width: 300px;
  max-width: 377px;
  min-height: 200px;
  margin: 30px auto;
  box-sizing: border-box;
  padding: 24px;
`;

export const AddToCartFormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: .5em;
`;

export const Title = styled.h1`
  margin: 0;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 0.5em;
`;

export const PriceOption = styled.div`
  margin-bottom: .5em;
`;


export const Input = styled.input`
  position: absolute;
  color: #999;
  &:checked + label > *  {
    color: black;
  }
`;

export const Label = styled.div`
  display: flex;
  justify-content: space-between;
  color: #999;
  padding-left: 2em;
  font-size: 16px;
  line-height: 19px;

  &:nth-last-child(1) {
    font-weight: bold;
  }
`;

export const SubmitContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5em;
`;

export const SubmitPrice = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  text-align: right;
  margin-right: 16px;
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: #6CA22C;
  width: 137px;
  height: 48px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

export const ButtonImage = styled.img`
  margin: 0;
  padding: 0;
  width: 24px;
  height: 24px;
`;

export const SubmitButtonText = styled.div`
  color: white;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
`;
