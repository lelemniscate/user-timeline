import styled from 'styled-components';
import { avatarSize, color1 } from '../styles/constants';

const StyledAvatar = styled.div`
  font-weight: bold;
  color: white;
  background-color: ${color1};
  border-radius: 50%;
  width: ${avatarSize}px;
  height: ${avatarSize}px;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;

  overflow: hidden;
`;

const Avatar = ({ model }) => (
  <StyledAvatar>
    {
      (model.avatar === undefined)
        ? (<span>{model.initials}</span>)
        : (<img src={model.avatar} alt={`${model.name}'s avatar`} width={`${avatarSize}px`} />)
    }
  </StyledAvatar>
);

export default Avatar;
