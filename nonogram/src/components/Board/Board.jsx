import Cell from './Cell.jsx'
import './board.css'

export default function Board({ grid, colors, isWon, onCellClick }) {
    return (
        <div className="board">
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="board__row">
                    {row.map((value, colIndex) => (
                        <Cell
                            key={colIndex}
                            value={value}
                            color={colors[rowIndex][colIndex]}
                            isWon={isWon}
                            onClick={() => onCellClick(rowIndex, colIndex)}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}