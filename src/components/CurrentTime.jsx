import styled from 'styled-components';
import { DateTime } from 'luxon';
import { color4 } from '../styles/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 32px 0px 32px 0px;

  .now {
    margin: 8px 8px 8px 8px;
    padding: 8px 16px 8px 16px;
    width: fit-content;
    align-self: center;
    border-radius: 8px;
    border: 2px solid ${color4};
  }
`;

const CurrentTime = () => (
  <Container>
    <div>Your current time</div>
    <span className="now">{DateTime.now().toFormat('HH:mm')}</span>
  </Container>
);


export default CurrentTime;
