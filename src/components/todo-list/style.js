import styled from 'styled-components';

export const TodoList = styled.ul`
  margin-top: 1.5rem;
  max-width: 33.75rem;
  width: 100%;
  background-color: hsl(240, 5%, 18%);
  list-style: none;
  border-radius: 5px;
`;

export const ItemList = styled.li`
  display: grid;
  grid-template-columns: 1fr 8fr 1fr;
  padding: 0px 15px 0px 15px;
  color: white;
  height: 50px;
  border-bottom: gray 1px solid;
  align-content: center;

  button {
    place-self: center;
  }
`;

export const Item = styled.p`
  align-self: center;
  margin-left: 1.25rem;
`;

export const FiltterBar = styled.div`
  display: grid;
  grid-template-columns: 4fr 6fr 4fr;
  padding: 0px 15px 0px 15px;
  color: white;
  line-height: 2.5rem;
  height: 50px;
  justify-items: center;
`;
