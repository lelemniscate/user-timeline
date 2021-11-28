import './App.css';
import CurrentTime from './components/CurrentTime';
import Header from './components/Header';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="App">
      <Header />
      <CurrentTime />
      <Timeline />
    </div>
  );
}

export default App;
