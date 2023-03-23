import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { AnimalList } from './components/AnimalList';
import './style.css';

const App = () => {
  const [animals, setAnimals] = useState('')
  useEffect(() => {
    fetch('https://lrolecek.github.io/zviratka-api/zvirata.json')
      .then((response) => response.json())
      .then((data) => {
        setAnimals(data.zvirata)
        console.log(data.zvirata)});
  }, []);

  return (
    <>
      <h1>Zvířátka v ZOO</h1>

      <div className="container"> 
        {animals && <AnimalList animals={animals} />}   
      </div>
    </>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
