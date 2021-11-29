import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import AddPerson from './AddPerson';

describe('AddPerson popin', () => {
  it('renders properly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <AddPerson />
      </Provider>
    );
    expect(getByText('Name:')).toBeInTheDocument();
    expect(getByText('Avatar url:')).toBeInTheDocument();
    expect(getByText('Timezone name:')).toBeInTheDocument();
  });
});
