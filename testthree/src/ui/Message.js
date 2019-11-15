import React from 'react';

function Message(props) {
    const onCellClickHandler = () => {
        props.position.join('') === props.finishPoint.join('') ?
            alert('Congratulations! You are winner!') :
            alert('Sorry! You are looser!')
    }

    const mazeCellStyle = {
        backgroundColor: 'blue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50, height: 50,
        margin: '10px'
    }
    return (
        <div style={mazeCellStyle} onClick={onCellClickHandler}>
            <span>1</span>
        </div>
    );
}

export default MazeCell;