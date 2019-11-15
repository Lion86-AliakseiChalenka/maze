import React from 'react';
import {connect} from 'react-redux'
import MazeCellStart from "./MazeCellStart.js";
import MazeCell from "./MazeCell.js";

function GameInformation(props) {
    const gameInformationStyle = {
        float: 'left',
        padding: 25,
        border: '1px solid grey',
        margin: '20px',
        borderRadius: 5
    }
    const {generatedTurns} = props
    const turns = generatedTurns.map((el,index) => <li key={index}>{el}</li>)

    return (
        <>
            {generatedTurns.length ?
                <div style={gameInformationStyle}>
                    <ol>
                        {turns}
                    </ol>
                </div> : null}
        </>
    )
        ;
}

const mstp = (state) => {
    return {
        mazeField: state.mazeField,
        startPoint: state.startPoint,
        generatedTurns: state.generatedTurns
    }
}
export default connect(mstp, {})(GameInformation);