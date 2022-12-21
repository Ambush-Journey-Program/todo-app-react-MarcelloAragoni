import styled from 'styled-components';

export const FilterButton = styled.button`
  height: 30px;
  font-weight: bold;
  background-repeat: no-repeat;
  background-position: center;
  color: #5b5e7e;
  background-color: transparent;
  cursor: pointer;
  border: none;
  align-self: center;

  ${(props) =>
    props.isActive && {
      color: '#3A7CFD'
    }};

  &:hover {
    color: white;
  }
`;
