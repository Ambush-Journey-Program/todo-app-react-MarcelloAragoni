import CloseButton from '../close-button/CloseButton';
import Checkbox from '../check-box/CheckBox';
import * as S from './style';

export default function TodoItem({ item }) {
  return (
    <S.ItemList>
      <Checkbox />
      <S.Item>{item}</S.Item>
      <CloseButton />
    </S.ItemList>
  );
}
