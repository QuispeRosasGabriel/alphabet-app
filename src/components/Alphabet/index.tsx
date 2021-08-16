import React, { FC } from 'react'
import Button from '../Button';
import './style.css';

export type AlphabetProps = {
    listLetters?: Array<string>;
    setWord: (letters: Array<string>) => void;
    word: Array<string>;
};

const Alphabet: FC<AlphabetProps> = ({ listLetters, setWord, word }) => {
    const handleClickButton = (letter: string) => {
        if (word.length === 3) {
            return;
        }
        setWord([...word, letter])
    }

    const handleReset = () => setWord([]);

    return (
        <>
            <div className='alphabet-container'>
                <div onClick={handleReset} className='alphabet-cancel'>(X)</div>
                {
                    listLetters?.map((letter: string, idx: number) => (
                        <span key={idx}>
                            <Button content={letter} onClick={() => handleClickButton(letter)} key={idx} />
                        </span>
                    ))
                }
            </div>
        </>
    )
}

export default Alphabet
