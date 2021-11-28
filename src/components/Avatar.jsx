import styled from 'styled-components';
import People from '../models/People';
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

  margin-top: 16px;

  overflow: hidden;
`;

const Avatar = ({ model }) => {
  const person = new People(model);
  return (
    <StyledAvatar>
      {
        (person.avatar === undefined)
          ? (<span>{person.initials}</span>)
          : (<img src={person.avatar} alt={`${person.name}'s avatar`} width={`${avatarSize}px`} />)
      }
    </StyledAvatar>
  );
};

export default Avatar;
