export default function Cell({ value, color, isWon, onClick }) {
    let className = 'cell'

    if (value === 1) className += ' cell--filled'
    if (value === 2) className += ' cell--crossed'
    if (isWon && color) className += ' cell--won'

    const style = isWon && color ? { backgroundColor: color } : {}

    return (
        <div
            className={className}
            style={style}
            onClick={onClick}
        />
    )
}