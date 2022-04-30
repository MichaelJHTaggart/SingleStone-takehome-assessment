import './App.css';
import { SetupSteps } from './components/SetupSteps';


function App() {
  return (
    <div className="App">
      <header>
        <img className="logo" src="/logo-endless.svg" alt="logo" />
      </header>
      <main className="main">
        <div className="main-content">
          <p className="hero-description">New Games & Accessories</p>
          <h1>Monthly packages.</h1>
          <h1>Excitement delivered daily.</h1>
          <p className="hero-description">
            What's the best way to shop for the latest video games and
            peripherals? How about never shopping at all? You'll get new stuff
            on your doorstep &mdash; every month.
          </p>
          <button>GET STARTED</button>
        </div>
      </main>
      <SetupSteps />
    </div>
  );
}

export default App;
