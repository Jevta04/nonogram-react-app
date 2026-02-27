export function autoFill(grid, solution) {
    const newGrid = grid.map(r => [...r]);
    const size = solution.length; // uzmi velicinu matrice

    // proveri redove
    for (let row = 0; row < size; row++) {
        const rowComplete = solution[row].every(
            (cell, col) => cell !== 1 || newGrid[row][col] === 1
        )
        if (rowComplete) {
            for (let col = 0; col < size; col++) {
                if (newGrid[row][col] === 0) {
                    newGrid[row][col] = 2 // svaki koji je ostao prazan postaje X
                }
            }
        }
    }

    // proveri kolone; isto kao for gore
    for (let col = 0; col < size; col++) {
        const colComplete = solution.every(
            (row, rowIndex) => row[col] !== 1 || newGrid[rowIndex][col] === 1
        )
        if (colComplete) {
            for (let rowIndex = 0; rowIndex < size; rowIndex++) {
                if (newGrid[rowIndex][col] === 0) {
                    newGrid[rowIndex][col] = 2
                }
            }
        }
    }

    return newGrid;
}