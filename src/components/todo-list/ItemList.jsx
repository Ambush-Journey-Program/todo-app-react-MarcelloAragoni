import { FILTERS_VALUES } from '../../utilities/consts';
import CloseButton from '../close-button/CloseButton';
import Checkbox from '../check-box/CheckBox';
import * as S from './style';

export default function TodoItem({ onDelete, updateStatus, id, status, item }) {
  function handleChangeStatus() {
    const newStatus =
      status === FILTERS_VALUES.ACTIVE ? FILTERS_VALUES.COMPLETE : FILTERS_VALUES.ACTIVE;

    if (status === FILTERS_VALUES.ACTIVE) {
      updateStatus(id, newStatus);
    }
    if (status === FILTERS_VALUES.COMPLETE) {
      updateStatus(id, newStatus);
    }
  }

  const isChecked = status === FILTERS_VALUES.COMPLETE;

  function handleDeleteItem() {
    onDelete(id);
  }

  return (
    <S.ItemList>
      <Checkbox onChange={handleChangeStatus} isChecked={isChecked} />
      <S.Item>{item}</S.Item>
      <CloseButton onClick={handleDeleteItem} />
    </S.ItemList>
  );
}
