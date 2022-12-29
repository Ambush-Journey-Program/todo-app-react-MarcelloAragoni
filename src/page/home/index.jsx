import { useState } from 'react';

import { FILTERS_VALUES } from '../../utilities/consts';
import TodoList from '../../components/todo-list/';
import Input from '../../components/input/';
import FilterButton from '../../components/filter-button/';
import * as S from './style';

const FILTERS_TABS = [
  { name: 'All', value: FILTERS_VALUES.ALL },
  { name: 'Active', value: FILTERS_VALUES.ACTIVE },
  { name: 'Complete', value: FILTERS_VALUES.COMPLETE }
];

export default function Home() {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [activeFilter, setActiveFilter] = useState(FILTERS_VALUES.ALL);

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
