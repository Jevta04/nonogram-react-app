export function checkWin(currentState, completeState) {
    for (let row = 0; row < completeState.length; row++) {
        for (let col = 0; col < completeState[row].length; col++) {
            if (completeState[row][col] === 1 && currentState[row][col] !== 1) {
                return false;
            }
        }
    }
    return true;
}
// EMPTY = 0, FILLED = 1, CROSSED = 2