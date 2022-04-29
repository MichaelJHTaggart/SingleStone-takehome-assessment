import { useState } from 'react';
import './App.css';
import { SetupSteps } from './components/SetupSteps';

interface Process {
  number: string;
  title: string;
  description: string;
}

function App() {
  const process: Process[] = [
    {
      number: '01',
      title: 'FILL OUT A PROFILE',
      description: `We only want you to get games and gear that you'll love, so we'll ask for your preferences up front`,
    },
    {
      number: '02',
      title: 'REQUEST A DELIVERY',
      description: `Once you're ready for your first delivery, all it takes is a click to get your shipment on the way.`,
    },
    {
      number: '03',
      title: 'KEEP WHAT YOU WANT',
      description: `Tell us "no thanks" by returning any unwanted products in the enclosed packaging.`,
    },
    {
      number: '04',
      title: 'REQUEST ANOTHER DELIVERY',
      description: `Get your next gaming fix by updating your profile then initiating your next shipment.`,
    },
  ];

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
