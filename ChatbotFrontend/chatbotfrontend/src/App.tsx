import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Chat from './Components/Chat';

function App() {
    return (
        <div>
            <Chat message={"Test"} user={"me"} />
        </div>
    )
}

export default App;