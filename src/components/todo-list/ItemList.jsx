import CloseButton from '../close-button/CloseButton';
import Checkbox from '../check-box/CheckBox';
import * as S from './style';

export default function TodoItem({ items }) {
  console.log({ items });
  return (
    <S.ItemList>
      <Checkbox />
      <S.Item>{items}</S.Item>
      <CloseButton />
    </S.ItemList>
  );
}
