import './App.css';
import CurrentTime from './components/CurrentTime';
import Header from './components/Header';
import Timeline from './components/Timeline';
import People from './models/People';

function App() {
  return (
    <div className="App">
      <Header />
      <CurrentTime />
      <Timeline people={[
        new People({ name: 'Anakin Skywalker', timezone: 'America/New_York' }),
        new People({ name: 'Padme Amidala', timezone: 'Asia/Tokyo', avatar: 'https://static.wikia.nocookie.net/frstarwars/images/3/3f/Padm%C3%A9_Amidala.jpg' }),
      ]} />
    </div>
  );
}

export default App;
