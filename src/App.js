
import './App.css';
import Tile from './components/Tile'

function App() {
    return (
    <div id = 'mainPage'>
      <div className='divRow'>
        <Tile className = 'tile' out = 'output' call = 'register' instruct = 'input a username or password that isnt already in use and click submit'/>
        <Tile className = 'tile'/>
      </div>
    </div>
  );
}

export default App;