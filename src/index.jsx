import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { AnimalList } from './components/AnimalList';
import { AnimalDetail } from './components/AnimalDetail';
import './style.css';

const App = () => {
  const [animals, setAnimals] = useState('')
  const [selectedAnimal, setSelectedAnimal] = useState(null)
 
  useEffect(() => {
    fetch('https://lrolecek.github.io/zviratka-api/zvirata.json')
      .then((response) => response.json())
      .then((data) => {
        setAnimals(data.zvirata)
        setSelectedAnimal(data.zvirata[0])});
  }, []);

  const handleSelect = (name) => {
    const foundAnimal = animals.find((animal) => animal.nazev === name)
    setSelectedAnimal(foundAnimal)
  }

  return (
    <>
      <h1>Zvířátka v ZOO</h1>

      <div className="container"> 
        {animals && <AnimalList animals={animals} onSelected={handleSelect} />}
        {animals && selectedAnimal && <AnimalDetail 
          name={selectedAnimal.nazev}
          latin={selectedAnimal.nazevLatinsky}
          image={selectedAnimal.foto}
          description={selectedAnimal.popis}
          home={selectedAnimal.domovina}
          biotop={selectedAnimal.biotop}
          food={selectedAnimal.potrava}
          size={selectedAnimal.velikost}
          />}   
      </div>
    </>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
