import { calculateHints } from '../../logic/hintCalculator.js'
import './hints.css'

export default function ColHints({ solution }) {
    const cols = solution[0].map((_, colIndex) =>
        solution.map(row => row[colIndex])
    )

    return (
        <div className="col-hints">
            {cols.map((col, colIndex) => (
                <div key={colIndex} className="col-hints__item">
                    {calculateHints(col).map((hint, i) => (
                        <span key={i} className="hint">{hint}</span>
                    ))}
                </div>
            ))}
        </div>
    )
}