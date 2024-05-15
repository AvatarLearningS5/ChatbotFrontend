import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    const [inputOne, setInputOne] = useState('');
    const [response, setResponse] = useState('');

    const handleInputOneChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputOne(event.target.value);
    };

    const handleInputTwoChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setResponse(event.target.value);
    };

    const handleEnter = () => {
        console.log('Enter clicked!');
        console.log('Input One:', inputOne);
        console.log('Input Two:', response);
    };

    const handleStop = () => {
        console.log('Stop clicked!');
        setInputOne('');
        setResponse('');
    };

    return (
        <div>
            <input
                type="text"
                value={inputOne}
                onChange={handleInputOneChange}
                placeholder="How can I help you?"
            />
            <button onClick={handleEnter}>Enter</button>
            <input
                type="text"
                value={response}
                onChange={handleInputTwoChange}
                placeholder="Response"
                readOnly
            />
            <br></br>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
}

export default App;