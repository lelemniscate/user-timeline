import { render } from '@testing-library/react';
import CurrentTime from './CurrentTime';

describe('CurrentTime', () => {
  it('renders properly', () => {
    const { getByText } = render(
      <CurrentTime />
    );
    expect(getByText('Your current time')).toBeInTheDocument();
    expect(getByText((content, element) => {
      return element.tagName.toLowerCase() === 'span'
        && content.length === 5
    })).toBeInTheDocument();
  });
});
