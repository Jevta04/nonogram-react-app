import Cell from './Cell.jsx'
import './board.css'

export default function Board({ grid, colors, isWon, onMouseDown, onMouseEnter, onMouseUp }) {
    return (
        <div className="board" onMouseUp={onMouseUp} onMouseLeave={onMouseUp}>
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="board__row">
                    {row.map((value, colIndex) => (
                        <Cell
                            key={colIndex}
                            value={value}
                            color={colors[rowIndex][colIndex]}
                            isWon={isWon}
                            onMouseDown={() => onMouseDown(rowIndex, colIndex)}
                            onMouseEnter={() => onMouseEnter(rowIndex, colIndex)}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}