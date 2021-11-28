import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { color3, color4 } from '../styles/constants';
import { zones } from 'tzdata';
import { addPerson } from '../features/people/peopleSlice';

const zonesNames = Object.keys(zones);

const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000050;
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;
`;

const PopIn = styled.div`
  border: 2px solid ${color3};
  border-radius: 8px;
  background-color ${color4};
  display: flex;
  flex-direction: column;
  padding: 16px 32px 16px 32px;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 8px 8px 8px 8px;
`;

const FormLabel = styled.span`
  margin-right: 8px;
`;

const Close = styled.button`
  align-self: flex-end;
  margin-bottom: 24px;
`;

const Validate = styled.button`
  width: 50%;
  align-self: center;
  margin-top: 32px;
`;

const AddPerson = ({ close }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [timezone, setTimezone] = useState('');

  const onValidate = useCallback(() => {
    if (
      name.length > 0
      && zonesNames.includes(timezone)
    ) {
      console.log('dispatch');
      dispatch(addPerson(name, url.length > 0 ? url : undefined, timezone))
    }
    close();
  }, [name, url, timezone, dispatch, close]);

  return (
    <Container>
      <PopIn>
        <Close onClick={() => close()}>X</Close>
        <FormItem>
          <FormLabel>Name: </FormLabel>
          <input onChange={(e) => setName(e.target.value)} value={name} />
        </FormItem>
        <FormItem>
          <FormLabel>Avatar url: </FormLabel>
          <input onChange={(e) => setUrl(e.target.value)} value={url} />
        </FormItem>
        <FormItem>
          <FormLabel>Timezone name: </FormLabel>
          <input onChange={(e) => setTimezone(e.target.value)} value={timezone} />
        </FormItem>
        <Validate onClick={() => onValidate()}>Add Person</Validate>
      </PopIn>
    </Container>
  );
};

export default AddPerson;
