export const getCountRandomTurns = (count) => {
    const userTurns = []
    const direction = ['up', 'right', 'down', 'left']
    for (let i = 1; i <= count; ++i) {
        const randomNumber = Math.floor(Math.random() * (4))
        userTurns.push(direction[randomNumber])
    }
    return userTurns
}
export const getGameField = (num) => {
    const gameFieldWithCoords = []
    for (let i = 1; i <= num; ++i) {
        for (let j = 1; j <= num; ++j) {
            gameFieldWithCoords.push([i, j])
        }
    }
    return gameFieldWithCoords
}

export const setRandomCell = (array) => {
    return array[Math.floor(Math.random() * array.length + 1)]
}

export const getFinishPoint = (mazeField, generatedTurns, startPoint) => {
    let finishPoint = [startPoint[0], startPoint[1]]
    let [a, b] = finishPoint
    generatedTurns.forEach((turn) => {
        switch (turn) {
            case 'up':
                if (a === 1) {
                    a = Math.sqrt(mazeField.length)
                } else {
                    a = a - 1
                } break
            case 'down':
                if (a === Math.sqrt(mazeField.length)) {
                    a = 1
                } else {
                    a = a + 1
                } break
            case 'left':
                if (b === 1) {
                    b = Math.sqrt(mazeField.length)
                } else {
                    b = b - 1
                } break
            case 'right':
                if (b === Math.sqrt(mazeField.length)) {
                    b = 1
                } else {
                    b = b + 1
                } break
            default:
                break
        }
    })
    return [a, b]
}