import peopleReducer from './peopleSlice';

const padme = {
  name: 'Padme Amidala',
  avatar: undefined,
  timezone: 'Europe/Paris',
};

const anakin = {
  name: 'Anakin Skywalker',
  avatar: undefined,
  timezone: 'Europe/Paris',
};

describe('people reducer', () => {
  it('should handle initial state', () => {
    expect(peopleReducer(undefined, { type: 'unknown' })).toEqual({
      people: [],
      status: 0,
    });
  });

  it('should handle loading of new people', () => {
    expect(peopleReducer({ people: [], status: 1 }, { type: 'application/launch/fulfilled', payload: [
      padme, anakin,
    ] })).toEqual({
      people: [padme, anakin],
      status: 0,
    });
  });

  it('should handle addition of new people', () => {
    expect(peopleReducer({ people: [ padme ], status: 0 }, { type: 'person/add/fulfilled', payload: anakin })).toEqual({
      people: [padme, anakin],
      status: 0,
    });
  });
});
