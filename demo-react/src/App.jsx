import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const greeting = 'test';

  return (
    <div>
      <Welcome text={greeting} />
    </div>
  );
};

const Welcome = (props) => {
  console.log(Welcome);
  return <h1>{props.text}</h1>;
};
export default App
