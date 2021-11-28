import styled from 'styled-components';
import { DateTime } from 'luxon';

import { color4 } from '../styles/constants';

const hours = Array.from(Array(25).keys());
const showHours = [0, 12, 24];
const hourSize = 24;
const lineHeight = 32;

const HourLine = styled.div`
  display: grid;
  grid-template-columns: repeat(${hours.length}, ${hourSize}px);
  width: 100%;
`;

const HoursBarContainer = styled(HourLine)`
  border-bottom: 1px solid ${color4};
  padding: 0px 0px 8px 0px;
  background-color: white;
`;

const HoursBar = () => (
  <HoursBarContainer>
    {hours.map(hour => (<div>{showHours.includes(hour) ? hour : ''}</div>))}
  </HoursBarContainer>
);

const Blank = () => (<div />); 

const Person = ({ model }) => (
  <div>{model.initials}</div>
)

const LineBackground = () => (
  <div className="line-background">
    <div />
    <div className="zone-left" />
    <div className="zone-right" />
    <div />
  </div>
);

const Line = ({ model }) => {
  const date = DateTime.local().setZone(model.timezone);
  console.log(`${model.initials} date: ${date}`);
  return (
    <HourLine>
      {hours.map(hour => (
        (date.hour === hour)
          ? (<Person model={model} />)
          : (<Blank />)
      ))}
    </HourLine>
  );
};

const TimelineContainer = styled.div`
  display: grid;
  grid-template-areas: solo;

  .line-background {
    grid-area: solo;
    width: ${25 * hourSize}px;

    display: grid;
    grid-template-columns: ${hourSize / 2}px repeat(2, auto) ${hourSize / 2}px;

    .zone-left {
      border-left: 2px dashed ${color4};
      border-right: 1px dashed ${color4};
    }

    .zone-right {
      border-left: 1px dashed ${color4};
      border-right: 2px dashed ${color4};
    }
  }

  .time-table {
    grid-area: solo;
  }
`;

const TimeTable = styled.div`
  width: 80%;
  display: grid;
  grid-template-rows: ${({ size }) => `repeat(${size + 1}, ${lineHeight}px)`};
`;

const Timeline = ({ people }) => (
  <TimelineContainer>
    <LineBackground />
    <TimeTable className="time-table" size={people.length}>
      <HoursBar />
      {people.map((person) => (<Line model={person} />))}
    </TimeTable>
  </TimelineContainer>
);

export default Timeline;
