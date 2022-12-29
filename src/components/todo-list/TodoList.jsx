import { FILTERS_VALUES } from '../../utilities/consts';
import TodoItem from './ItemList';
import * as S from './style';

export default function TodoList({ listItem, filter = '', handleUpdateList }) {
  if (!listItem || listItem.length === 0) {
    return null;
  }

  function changeStatus(id, newStatus) {
    const itensUpdated = listItem.map((item) =>
      item.id === id ? { ...item, status: newStatus } : item
    );

    handleUpdateList(itensUpdated);
  }

  const shouldShowCompleteList = !filter || filter === FILTERS_VALUES.ALL;

  const filteredList = shouldShowCompleteList
    ? !listItem || listItem
    : (!listItem || listItem).filter((item) => item.status === filter);

  function handleDeleteItem(id) {
    const listItemUpdated = listItem.filter((item) => item.id !== id);

    // listItem.splice(
    //   listItem.findIndex((item) => item.id === id),
    //   1
    // );
    handleUpdateList(listItemUpdated);
  }

  return (
    <S.TodoList>
      {filteredList.map((item) => (
        <TodoItem
          key={item.id}
          updateStatus={changeStatus}
          onDelete={handleDeleteItem}
          id={item.id}
          item={item.text}
          status={item.status}
        />
      ))}
    </S.TodoList>
  );
}
