
import './App.css';
import CurrentLocation from './Components/CurrentLocation';
import ForCast from './Components/ForCast';

function App() {
  return (
    <div className='weathermain'>
      <CurrentLocation/>
      <ForCast/>
    </div>
  );
}

export default App;
