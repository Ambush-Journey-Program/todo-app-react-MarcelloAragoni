import TodoItem from './ItemList';
import * as S from './style';

export default function TodoList({ itemList, filter = '' }) {
  if (!itemList || itemList.length === 0) {
    return null;
  }

  const shouldShowCompleteList = !filter || filter === 'all';

  const filteredList = shouldShowCompleteList
    ? itemList
    : itemList.filter((item) => item.status === filter);

  return (
    <S.TodoList>
      {filteredList.map((item) => (
        <TodoItem key={item.id} item={item.text} />
      ))}
    </S.TodoList>
  );
}
