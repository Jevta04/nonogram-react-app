import './ui.css'

export default function Toolbar({ mode, onToggleMode }) {
    return (
        <div className="toolbar">
            <div className="toggle" onClick={onToggleMode}>
                <div className={`toggle__slider ${mode === 2 ? 'toggle__slider--right' : ''}`} />
                <span className={`toggle__label ${mode === 1 ? 'toggle__label--active' : ''}`}>O</span>
                <span className={`toggle__label ${mode === 2 ? 'toggle__label--active' : ''}`}>X</span>
            </div>
        </div>
    )
}