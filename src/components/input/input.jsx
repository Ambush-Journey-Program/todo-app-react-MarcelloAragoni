import PropTypes from 'prop-types';

import * as S from './style';

export default function Input({ placeholder }) {
  return <S.Input placeholder={placeholder}></S.Input>;
}

Input.propTypes = {
  placeholder: PropTypes.string
};
