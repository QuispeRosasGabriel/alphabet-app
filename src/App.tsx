import React, { useState } from 'react';
import './App.css';
import Alphabet from './components/Alphabet';
import Word from './components/Word';

const alphabetList = {
  board: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P"
  ]
}


const App = () => {
  const {board} = alphabetList
  const [word, setWord] = useState<Array<string>>([]);
  return (
    <div className="App">
      <Alphabet listLetters={board} setWord={setWord} word={word} />
      <Word w={word} />
    </div>
  );
}

export default App;
