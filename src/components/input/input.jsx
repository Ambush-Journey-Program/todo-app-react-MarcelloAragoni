import PropTypes from 'prop-types';
import { useState } from 'react';

import * as S from './style';

let nextId = 0;
export default function Input({ onSubmit, value }) {
  const [inputValue, setInputValue] = useState('');

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const itemList = { id: nextId++, text: inputValue };

    onSubmit(itemList);
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Input onChange={handleChange} value={value} />
    </S.Form>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string
};
