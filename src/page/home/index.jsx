import { useState, useEffect } from 'react';

import { FILTERS_VALUES, LOCAL_STORAGE_TODOLIST_KEY } from '../../utilities/consts';
import TodoList from '../../components/todo-list/';
import Input from '../../components/input/';
import FilterButton from '../../components/filter-button/';
import * as S from './style';
import { getLocalStorage, setLocalStorage } from '../../utilities/localStorageHelper';

const FILTERS_TABS = [
  { name: 'All', value: FILTERS_VALUES.ALL },
  { name: 'Active', value: FILTERS_VALUES.ACTIVE },
  { name: 'Complete', value: FILTERS_VALUES.COMPLETE }
];

export default function Home() {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [activeFilter, setActiveFilter] = useState(FILTERS_VALUES.ALL);

  useEffect(() => {
    const listItem = JSON.parse(getLocalStorage(LOCAL_STORAGE_TODOLIST_KEY));
    console.log(listItem);
    if (listItem) {
      setTodoList(listItem);
    }
  }, []);

  useEffect(() => {
    if (!todoList || todoList.length === 0) {
      return;
    }
    setLocalStorage(LOCAL_STORAGE_TODOLIST_KEY, JSON.stringify(todoList));
  }, [todoList]);

  function handleList(listItem) {
    setTodoList([...todoList, listItem]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const listItem = {
      id: `${Math.floor(Date.now() * Math.random()).toString(36)}`,
      text: inputValue,
      status: FILTERS_VALUES.ACTIVE
    };

    handleList(listItem);
  }

  function handleClickFilterButton(filterName) {
    setActiveFilter(filterName);
  }

  function handleClearCompleteButton(filterName) {
    const listItemUpdated = todoList.filter((item) => item.status !== FILTERS_VALUES.COMPLETE);

    setTodoList(listItemUpdated);
    setActiveFilter(filterName);
  }

  return (
    <S.TodoBox>
      <S.Form onSubmit={handleSubmit}>
        <Input onChange={setInputValue} value={inputValue} />
      </S.Form>
      <TodoList listItem={todoList} filter={activeFilter} handleUpdateList={setTodoList} />
      <S.FilterBar>
        <span>Tasks ToDo {todoList.length}</span>
        <div>
          {FILTERS_TABS.map((filter) => (
            <FilterButton
              key={filter.value}
              onClick={() => handleClickFilterButton(filter.value)}
              isActive={activeFilter === filter.value}
              type="button">
              {filter.name}
            </FilterButton>
          ))}
        </div>
        <FilterButton onClick={() => handleClearCompleteButton(FILTERS_VALUES.ALL)} type="button">
          Clear Complete
        </FilterButton>
      </S.FilterBar>
    </S.TodoBox>
  );
}
