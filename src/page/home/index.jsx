import { useState } from 'react';

import TodoList from '../../components/todo-list/';
import Input from '../../components/input/';
import * as S from './style';

export default function Home() {
  const [todoList, setTodoList] = useState([]);
  const [isFilled, setIsFilled] = useState(false);
  const [inputValue, setInputValue] = useState('');

  function handleList(itemList) {
    setTodoList([...todoList, itemList]);
    setIsFilled(true);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const itemList = { id: `id-${todoList.length}`, text: inputValue };

    handleList(itemList);
  }

  return (
    <S.TodoBox>
      <S.Form onSubmit={handleSubmit}>
        <Input onChange={setInputValue} value={inputValue} />
      </S.Form>
      <TodoList ItemList={todoList} isFilled={isFilled} />
    </S.TodoBox>
  );
}
