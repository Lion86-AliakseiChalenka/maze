import React from 'react';
import {connect} from 'react-redux'
import {setGameCondition, setAccessToButton, getMessage} from "./../redux/reducer.js";import MazeCell from "./MazeCell.js";
import {Alert} from 'antd';
import 'antd/dist/antd.css';

function MazeBlock(props) {
    const {
        mazeField, startPoint, finishPoint,
        isMessageDisplayed, setGameCondition,
        gameResult, isGameFinished, cellWidth, cellHeight,
        setAccessToButton, getMessage
    } = props
    const mazeStyle = {
        width: (mazeField.length === 9 && `${2 * 14 + 14 + cellWidth * 3}px`) ||
        (mazeField.length === 25 && `${4 * 14 + 14 + cellWidth * 5}px`) ||
        (mazeField.length === 49 && `${6 * 14 + 14 + cellWidth * 7}px`) ||
        (mazeField.length === 81 && `${8 * 14 + 14 + cellWidth * 9}px`),
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: '#f2f4f5'
    }

    const maze = mazeField.map((el, index) => {
       return <MazeCell key={index}
                              position={el}
                              startPoint={startPoint}
                              finishPoint={finishPoint}
                              setGameCondition={setGameCondition}
                              gameResult={gameResult}
                              isGameFinished={isGameFinished}
                              cellWidth={cellWidth}
                              cellHeight={cellHeight}/>
    })
    const onClose = () => {
        setGameCondition(true, null)
        setAccessToButton(false)
    }
    const onWarningClose = () => {
        getMessage(false)
    }

    return (
        <>
            {(mazeField.length > 0
                &&
                <div style={mazeStyle}>
                    {maze}
                </div>)
            || (isMessageDisplayed
                &&
                <Alert style={{position: 'absolute', margin: '0 auto'}}
                       closable
                       onClose={onWarningClose}
                       message="Warning"
                       description="Please, set maze size"
                       type="warning"
                       showIcon/>)}
            {isGameFinished && gameResult === 'win'
            &&
            <Alert
                style={{position: 'absolute', margin: '0 auto'}}
                closable
                onClose={onClose}
                message="Success"
                description="Congratulations! You are winner."
                type="success"
                showIcon/>}
            {isGameFinished && gameResult === 'lose'
            &&
            <Alert
                style={{position: 'absolute', margin: '0 auto'}}
                closable
                onClose={onClose}
                message="Failed"
                description="Sorry, you are looser."
                type="error"
                showIcon
            />
            }
        </>
    );
}

const mstp = (state) => {
    return {
        mazeField: state.mazeField,
        mazeSize: state.mazeSize,
        startPoint: state.startPoint,
        finishPoint: state.finishPoint,
        isMessageDisplayed: state.isMessageDisplayed,
        isGameFinished: state.isGameFinished,
        gameResult: state.gameResult,
        cellWidth: state.cellWidth,
        cellHeight: state.cellHeight
    }
}
export default connect(mstp, {setGameCondition, setAccessToButton, getMessage})(MazeBlock);