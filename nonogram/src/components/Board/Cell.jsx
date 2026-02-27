export default function Cell({ value, color, isWon, onMouseDown, onMouseEnter }) {
    let className = 'cell'

    if (!isWon && value === 1) className += ' cell--filled'
    if (!isWon && value === 2) className += ' cell--crossed'
    if (isWon && color) className += ' cell--won'

    const style = isWon && color ? { backgroundColor: color } : {}

    return (
        <div
            className={className}
            style={style}
            onMouseDown={onMouseDown}
            onMouseEnter={onMouseEnter}
        />
    )
}