import React from 'react';
import GameInformation from "./ui/GameInformation.js";
import MazeBlock from "./ui/MazeBlock.js";
import SetupBlock from "./ui/SetupBlock.js";
import './App.css';

function App(props) {
    return (
        <div className="App">
            <SetupBlock/>
            <MazeBlock/>
            <GameInformation/>
        </div>
    );
}

export default App;
