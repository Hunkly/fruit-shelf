import React from 'react';
import './App.css';
import Fruit from './components/Fruit/Fruit.component';
import FruitBox from './components/FruitBox/FruitBox.component';

import lemon from './assets/img/lemon.png'
import orange from './assets/img/orange.png'
import apple from './assets/img/apple.png'

export interface IFruit {
    kind: string,
    size: number
}

const Fruits: IFruit[] = [
    {
        kind: apple,
        size: 1
    },
    {
        kind: lemon,
        size: 4
    },
    {
        kind: orange,
        size: 3
    }
]

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
      <FruitBox defaultKind="lemon" fruits = {Fruits}>
        <Fruit/>
        <Fruit/>
        <Fruit/>
      </FruitBox>
      </header>
    </div>
  );
};

export default App;
