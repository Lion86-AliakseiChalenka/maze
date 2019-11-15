import React from 'react';

function MazeCellStart(props) {
    const mazeCellStyle = {
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50, height: 50,
        margin: '10px'
    }
    return (
        <div style={mazeCellStyle} onClick={()=>console.log(props.position)}>
            <span>-Start-</span>
        </div>
    );
}

export default MazeCellStart;