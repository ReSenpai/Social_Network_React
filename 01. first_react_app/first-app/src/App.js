import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Technologies />
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <a href="#">Home</a>
      <a href="#">News</a>
    </div>
  );
}

const Technologies = () => {
  return (
    <div className="App">
      <ul>
        <li>html</li>
        <li>css</li>
        <li>javascript</li>
        <li>react</li>
      </ul>
    </div>
  );
}

export default App;
