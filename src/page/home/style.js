import styled from 'styled-components';

export const Form = styled.form`
  max-width: 100%;
`;

export const TodoBox = styled.div`
  background-image: url('../../assets/bg-desktop-dark.jpg');
  max-width: 33.75rem;
  margin: 9.875rem auto 0 auto;
`;

export const FilterBar = styled.div`
  display: grid;
  grid-template-columns: 4fr 6fr 4fr;
  color: white;
  line-height: 2.5rem;
  height: 50px;
  justify-items: center;
  max-width: 33.75rem;
  width: 100%;
  background-color: hsl(240, 5%, 18%);
  border-radius: 5px;
`;
