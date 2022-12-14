import PropTypes from 'prop-types';

import * as S from './style';

export default function Input({ placeholder }) {
  return <S.Input placeholder={placeholder} />;
}

Input.propTypes = {
  placeholder: PropTypes.string
};
