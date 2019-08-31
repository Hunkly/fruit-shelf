import React from 'react';
import './App.css';
import Fruit from './components/Fruit/Fruit.component';
import FruitBox from './components/FruitBox/FruitBox.component';

import lemon from './assets/img/lemon.png'
import orange from './assets/img/orange.png'
import apple from './assets/img/apple.png'
import FruitShelf from "./components/FruitShelf/FruitShelf.component";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
      <FruitShelf>
          <FruitBox defaultKind={apple} defaultSize={4}>
            <Fruit/>
            <Fruit kind={lemon} size={1}/>
            <Fruit/>
          </FruitBox>
          <FruitBox defaultKind={lemon} defaultSize={4}>
            <Fruit/>
            <Fruit/>
            <Fruit kind={orange} size={3}/>
          </FruitBox>
      </FruitShelf>
      </header>
    </div>
  );
};

export default App;
