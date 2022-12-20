import PropTypes from 'prop-types';
import * as S from './style';
export default function Input({ onChange, value }) {
  function handleChange(event) {
    onChange(event.target.value);
  }

  return <S.Input onChange={handleChange} value={value} />;
}

Input.propTypes = {
  placeholder: PropTypes.string
};
