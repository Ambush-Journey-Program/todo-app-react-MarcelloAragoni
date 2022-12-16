import { useState } from 'react';

import TodoList from '../../components/todo-list/';
import Input from '../../components/input/';
import * as S from './style';

export default function Home() {
  const [todoList, setTodoList] = useState([]);
  const [isFilled, setIsFilled] = useState(false);

  function handleList(itemList) {
    setTodoList([...todoList, itemList]);
    setIsFilled(true);
  }

  return (
    <S.TodoBox>
      <Input onSubmit={handleList} />
      <TodoList ItemList={todoList} isFilled={isFilled} />
    </S.TodoBox>
  );
}
