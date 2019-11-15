import {getCountRandomTurns, getGameField, setRandomCell, getFinishPoint} from "./calc/generation.js";

const SET_MAZE_SIZE = 'SET_MAZE_SIZE';
const SET_TURN_COUNT = 'SET_TURN_COUNT';
const SET_START_POINT = 'SET_START_POINT';
const SET_FINISH_POINT = 'SET_FINISH_POINT';
const GET_GENERATED_TURNS = 'GET_GENERATED_TURNS';
const GET_MAZE_FIELD = 'GET_MAZE_FIELD';

export const setMazeSize = (size) => ({type: SET_MAZE_SIZE, size});
export const setTurnCount = (count) => ({type: SET_TURN_COUNT, count});
export const setStartPoint = () => ({type: SET_START_POINT});
export const setFinishPoint = () => ({type: SET_FINISH_POINT});
export const getGeneratedTurns = () => ({type: GET_GENERATED_TURNS});
export const getMazeField = () => ({type: GET_MAZE_FIELD});

export const getGameData = () => (dispatch) => {
    dispatch(getGeneratedTurns())
    dispatch(getMazeField())
    dispatch(setStartPoint())
    dispatch(setFinishPoint())
}

const initialState = {
    mazeSize: '5x5',
    turnCount: 3,
    startPoint: [],
    finishPoint: [],
    mazeField: [],
    generatedTurns: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MAZE_SIZE:
            return {...state, mazeSize: action.size};
        case SET_TURN_COUNT:
            return {...state, turnCount: action.count};
        case SET_START_POINT:
            return {...state, startPoint: setRandomCell(state.mazeField)};
        case SET_FINISH_POINT:
            return {...state, finishPoint: getFinishPoint(state.mazeField, state.generatedTurns, state.startPoint)};
        case GET_GENERATED_TURNS:
            return {...state, generatedTurns: getCountRandomTurns(state.turnCount)}
        case GET_MAZE_FIELD:
            return {...state, mazeField: getGameField(state.mazeSize)}
        default:
            return state
    }
};

export default reducer