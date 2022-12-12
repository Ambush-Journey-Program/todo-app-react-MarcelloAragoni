import * as S from './style';

import closeIcon from '../../assets/icon-cross.svg';

export default function CloseButton({ type = 'button' }) {
  return (
    <S.CloseButton type={type}>
      <S.StyledCloseIcon height={40} width={40} />
      <svg src={closeIcon} />
    </S.CloseButton>
  );
}
