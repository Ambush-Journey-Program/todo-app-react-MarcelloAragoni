import TodoItem from './ItemList';
import * as S from './style';

export default function TodoList({ isFilled = false, ItemList }) {
  if (!isFilled) {
    return null;
  }

  return (
    <S.TodoList>
      {ItemList.map((item) => (
        <TodoItem key={item.id} items={item.text} />
      ))}
      <S.FiltterBar>
        <span>Tasks ToDo {ItemList.length}</span>
        <div>
          <button>All</button>
          <button>Active</button>
          <button>Complete</button>
        </div>
        <button>Clear Complete</button>
      </S.FiltterBar>
    </S.TodoList>
  );
}
