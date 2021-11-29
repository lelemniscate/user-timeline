import { render } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders properly', () => {
    const { getByText } = render(
      <Header />
    );
    expect(getByText('User Timeline')).toBeInTheDocument();
  });
});
