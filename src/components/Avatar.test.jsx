import { render } from '@testing-library/react';
import Avatar from './Avatar';

describe('Avatar', () => {
  it('renders properly when no image is given', () => {
    const { getByText } = render(
      <Avatar model={{
        name: 'Anakin Skywalker',
        avatar: undefined,
        timezone: 'Europe/Paris',
      }} />
    );
    expect(getByText('AS')).toBeInTheDocument();
  });

  it('renders properly when an image is given', () => {
    const { getByText } = render(
      <Avatar model={{
        name: 'Padme Amidala',
        avatar: 'https://static.wikia.nocookie.net/frstarwars/images/3/3f/Padm%C3%A9_Amidala.jpg',
        timezone: 'Europe/Paris',
      }} />
    );
    expect(getByText((content, element) => {
      return element.tagName.toLowerCase() === 'img'
        && element.src === 'https://static.wikia.nocookie.net/frstarwars/images/3/3f/Padm%C3%A9_Amidala.jpg';
    })).toBeInTheDocument();
  });
});
