import React from 'react';
import {connect} from 'react-redux'
import MazeCellStart from "./MazeCellStart.js";
import MazeCell from "./MazeCell.js";

function MazeBlock(props) {
    const mazeStyle = {
        width: (props.mazeField.length === 9 && '210px') ||
        (props.mazeField.length === 25 && '350px') ||
        (props.mazeField.length === 49 && '490px'),
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: '#669999'
    }
    const {mazeField, startPoint, finishPoint} = props
    const maze = mazeField.map((el, index) => {
        if (startPoint && el.join('') === startPoint.join(''))
            return <MazeCellStart key={index}
                                  position={el}
                                  finishPoint={finishPoint}/>
        else return <MazeCell key={index}
                              position={el}
                              finishPoint={finishPoint}/>
    })

    return (
        <>
            {mazeField.length > 0 ?
                <div style={mazeStyle}>
                    {maze}
                </div>
                : <Message/>
            }
        </>
    );
}

const mstp = (state) => {
    return {
        mazeField: state.mazeField,
        startPoint: state.startPoint,
        finishPoint: state.finishPoint
    }
}
export default connect(mstp, {})(MazeBlock);