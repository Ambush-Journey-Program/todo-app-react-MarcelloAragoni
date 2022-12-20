import { useState } from 'react';

import TodoList from '../../components/todo-list/';
import Input from '../../components/input/';
import FilterButton from '../../components/filter-button/';
import * as S from './style';

const FILTERS = { ALL: 'all', ACTIVE: 'active', COMPLETE: 'complete' };

const FILTERS_TABS = [
  { name: 'All', value: FILTERS.ALL },
  { name: 'Active', value: FILTERS.ACTIVE },
  { name: 'Complete', value: FILTERS.COMPLETE }
];

export default function Home() {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [activeFilter, setActiveFilter] = useState(FILTERS.ALL);

  function handleList(itemList) {
    setTodoList([...todoList, itemList]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const itemList = { id: `${todoList.length}`, text: inputValue, status: FILTERS.ACTIVE };

    handleList(itemList);
  }

  function handleClickFilterButton(filterName) {
    setActiveFilter(filterName);
  }

  return (
    <S.TodoBox>
      <S.Form onSubmit={handleSubmit}>
        <Input onChange={setInputValue} value={inputValue} />
      </S.Form>
      <TodoList itemList={todoList} filter={activeFilter} />
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
        <FilterButton onClick={() => handleClickFilterButton('all')} type="button">
          Clear Complete
        </FilterButton>
      </S.FilterBar>
    </S.TodoBox>
  );
}
