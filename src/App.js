import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import CurrentTime from './components/CurrentTime';
import Header from './components/Header';
import Timeline from './components/Timeline';
import { applicationLaunched } from './features/people/peopleSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(applicationLaunched());
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
      <CurrentTime />
      <Timeline />
    </div>
  );
}

export default App;
