import PropTypes from 'prop-types';

import * as S from './style';
import closeIcon from '../../assets/icon-cross.svg';

export default function CloseButton({ onClick, type = 'button' }) {
  return (
    <S.CloseButton onClick={onClick} type={type}>
      <S.StyledCloseIcon height={40} width={40} />
      <svg src={closeIcon} />
    </S.CloseButton>
  );
}

CloseButton.propTypes = {
  type: PropTypes.string
};
