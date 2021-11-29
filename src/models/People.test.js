import People from './People';

describe('People model tests', () => {
  it(`returns AK for Anakin Skywalker's initials`, () => {
    expect(new People({
      name: 'Anakin Skywalker',
      avatar: undefined,
      timezone: 'Europe/Paris',
    }).initials).toEqual('AS')
  });
});
