import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchPeople, postPerson } from './peopleAPI';

const idle = 0;
const fetching = 1;

const initialState = {
  people: [],
  status: idle,
};

export const applicationLaunched = createAsyncThunk(
  'application/launch',
  async () => {
    const people = await fetchPeople();
    return people;
  }
);

export const addPerson = createAsyncThunk(
  'person/add',
  async (name, url, timezone) => {
    const person = await postPerson({
      name, url, timezone,
    });
    return person;
  }
)

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(applicationLaunched.pending, (state) => {
        state.status = fetching;
      })
      .addCase(applicationLaunched.fulfilled, (state, action) => {
        state.status = idle;
        state.people = action.payload;
      })
      .addCase(addPerson.fulfilled, (state, action) => {
        state.people.push(action.payload);
      })
      .addDefaultCase((state, action) => state)
  }
});

export const selectPeople = (state) => state.people.people;
export const isFetching = (state) => state.people.status === fetching;
export const isIdle = (state) => state.people.status === idle;

export default peopleSlice.reducer;
