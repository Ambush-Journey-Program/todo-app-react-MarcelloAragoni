import PropTypes from 'prop-types';

import * as S from './style';

export default function FilterButton({ onClick, isActive, type = 'button', children }) {
  return (
    <S.FilterButton onClick={onClick} isActive={isActive} type={type}>
      {children}
    </S.FilterButton>
  );
}

FilterButton.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string
};
