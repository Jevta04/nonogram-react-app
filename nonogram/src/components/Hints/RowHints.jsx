import { calculateHints } from '../../logic/hintCalculator'
import './hints.css'

export default function RowHints({ solution }) {
    return (
        <div className="row-hints">
            {solution.map((row, rowIndex) => (
                <div key={rowIndex} className="row-hints__item">
                    {calculateHints(row).map((hint, i) => (
                        <span key={i} className="hint">{hint}</span>
                    ))}
                </div>
            ))}
        </div>
    )
}