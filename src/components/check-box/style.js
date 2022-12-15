import styled from 'styled-components';

export const CheckBox = styled.input`
  -moz-appearance: none;
  -webkit-appearance: none;
  -o-appearance: none;
  display: block;
  width: 30px;
  height: 30px;
  border: 2px solid hsl(233, 14%, 35%);
  border-radius: 25px;
  align-self: center;
  cursor: pointer;

  &:checked {
    background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));

    &:checked:after {
      content: '\u2713';
      color: white;
      font-size: 15px;
      margin-left: 8px;
      line-height: 25px;
    }
  }
`;
