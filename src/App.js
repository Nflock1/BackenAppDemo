import logo from './logo.svg';
import './App.css';
import Tile from './components/Tile'

function App() {
    return (
    <div id = 'mainPage'>
      <div className='divRow'>
        <Tile className = 'tile'/>
        <Tile className = 'tile'/>
      </div>
    </div>
  );
}

export default App;
