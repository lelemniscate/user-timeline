import styled from 'styled-components';
import Popup from 'reactjs-popup';
import { color1 } from '../styles/constants';
import AddPerson from './AddPerson';
import { useState } from 'react';

const StyledHeader = styled.header`
  background-color: ${color1};
  padding: 8px 32px 8px 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled.button`
  justify-self: right;
  width: 32px;
  height: 32px;
`;

const Header = () => {
  const [popin, setPopin] = useState(false);
  return (
    <StyledHeader>
      <h1>
        User Timeline
      </h1>
      <StyledButton onClick={() => setPopin(true)}>+</StyledButton>
      {popin && (<AddPerson close={() => setPopin(false)} />)}
    </StyledHeader>
  );
};

export default Header;
