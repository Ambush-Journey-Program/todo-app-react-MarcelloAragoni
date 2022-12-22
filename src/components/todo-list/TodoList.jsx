import { FILTERS_VALUES } from '../../utilities/consts';
import TodoItem from './ItemList';
import * as S from './style';

export default function TodoList({ listItem, filter = '', handleUpdateList }) {
  if (!listItem || listItem.length === 0) {
    return null;
  }

  function changeStatus(id, newStatus) {
    // const itensUpdated = listItem.map((item) => {
    //   if (item.id === id) {
    //     return {
    //       ...item,
    //       status: newStatus
    //     };
    //   }
    //   return item;
    // });

    const itensUpdated = listItem.map((item) =>
      item.id === id ? { ...item, status: newStatus } : item
    );

    handleUpdateList(itensUpdated);
  }

  const shouldShowCompleteList = !filter || filter === FILTERS_VALUES.ALL;

  const filteredList = shouldShowCompleteList
    ? !listItem || listItem
    : (!listItem || listItem).filter((item) => item.status === filter);

  return (
    <S.TodoList>
      {filteredList.map((item) => (
        <TodoItem
          key={item.id}
          updateStatus={changeStatus}
          id={item.id}
          item={item.text}
          status={item.status}
        />
      ))}
    </S.TodoList>
  );
}
