export function fetchPeople() {
  return Promise.resolve([
    { name: 'Anakin Skywalker', timezone: 'America/New_York' },
    { name: 'Padme Amidala', timezone: 'Asia/Tokyo', avatar: 'https://static.wikia.nocookie.net/frstarwars/images/3/3f/Padm%C3%A9_Amidala.jpg' },
  ]);
}

export function postPerson(person) {
  return Promise.resolve(person);
}
