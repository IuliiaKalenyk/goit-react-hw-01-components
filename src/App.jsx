import Profile from "./components/Profile/Profile";
import { name, tag, location, avatar } from "./data/user.json";



import './App.css';

function App() {
  return (
    <div className="App">
      <Profile avatar={avatar} name={name} tag={tag} location={location} />
    </div>
  );
}

export default App;

/* avatar={avatar} name={name} tag={tag} location={location} */

/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
 */