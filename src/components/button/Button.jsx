import * as S from './style';

export default function CloseButton({ type = 'button' }) {
  return (
    <S.CloseButton type={type}>
      <S.StyledCloseIcon />
    </S.CloseButton>
  );
}
