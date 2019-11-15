import React, {useState} from 'react';
import {Select, Icon, Divider, Slider, InputNumber, Row, Col, Button} from 'antd';
import 'antd/dist/antd.css';
import {connect} from 'react-redux'
import {setTurnCount, setMazeSize, getGameData} from "./../redux/reducer.js";

const {Option} = Select;
let index = 0;

function SetupBlock(props) {
    const {setTurnCount, setMazeSize, getGameData, mazeSize, turnCount} = props
    const [size, setSize] = useState({items: ['3x3', '5x5', '7x7', '9x9']})
    const [inputValue, setinputValue] = useState(1)
    const onChange = value => {
        setinputValue(value)
        setTurnCount(value)
    };
    const addItem = () => {
        const {items} = mazeSize;
        setSize({
            items: [...items, `New item ${index++}`],
        });
    };
    const onMazeSizeOptionClick = (item) => {
        setMazeSize(+item[0])
    }
    const onGeneratedButtonClick = () => {
        getGameData()
    }

    return (
        <div style={{float: 'left', padding: 25, border: '1px solid grey', margin: '20px', borderRadius: 5}}>
            {/*Choosing size of maze*/}
            <Select
                style={{width: 240}}
                placeholder="Select field size"
                dropdownRender={menu => (
                    <div>
                        {menu}
                        <Divider style={{margin: '4px 0'}}/>
                        <div style={{padding: '4px 8px', cursor: 'pointer'}}
                             onMouseDown={e => e.preventDefault()}
                             onClick={addItem}
                        >
                            <Icon type="plus"/> Add item
                        </div>
                    </div>
                )}
            >
                {size.items.map(item => (
                    <Option onClick={() => onMazeSizeOptionClick(item)} key={item}>{item}</Option>
                ))}
            </Select>

            {/*Choosing count of turns*/}
            <Row>
                <Col span={12}>
                    <Slider
                        min={turnCount}
                        max={20}
                        onChange={onChange}
                        value={typeof inputValue === 'number' ? inputValue : 0}
                    />
                </Col>
                <Col span={8}>
                    <InputNumber
                        min={turnCount}
                        max={20}
                        style={{marginLeft: 16}}
                        value={inputValue}
                        onChange={onChange}
                    />
                </Col>
            </Row>
            <Button onClick={onGeneratedButtonClick} type='primary'>Сгенерировать лабиринт</Button>
        </div>
    );
}

const mstp = (state) => {
    return {
        mazeSize: state.mazeSize,
        mazeField: state.mazeField,
        turnCount: state.turnCount
    }
}

export default connect(
    mstp,
    {setTurnCount, setMazeSize, getGameData})(SetupBlock);