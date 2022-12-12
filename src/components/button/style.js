import styled from 'styled-components';

import { ReactComponent as CloseIcon } from '../../assets/icon-cross.svg';

export const CloseButton = styled.button`
  height: 30px;
  width: 40px;
  padding: 0 20px;
  font-weight: bold;
  background-repeat: no-repeat;
  background-position: center;
  color: black;
  background-color: transparent;
  cursor: pointer;
  border: none;
`;

export const StyledCloseIcon = styled(CloseIcon)`
  height: 100px;
  width: 100px;

  &.path {
    fill: red;
  }
`;
