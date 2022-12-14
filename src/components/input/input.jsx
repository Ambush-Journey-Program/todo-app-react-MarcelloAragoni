import PropTypes from 'prop-types';

import * as S from './style';

export default function Input(props) {
  return <S.Input {...props} />;
}

Input.propTypes = {
  placeholder: PropTypes.string
};
