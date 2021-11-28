import styled from 'styled-components';
import { color1 } from '../styles/constants';

const StyledHeader = styled.header`
  background-color: ${color1};
  padding: 8px 32px 8px 32px;
  display: flex;
`;

const Header = () => (
  <StyledHeader>
    <h1>
      User Timeline
    </h1>
  </StyledHeader>
);

export default Header;
