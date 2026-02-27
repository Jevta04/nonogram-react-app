import { useNonogram } from '../hooks/useNonogram.js'
import Board from '../components/Board/Board.jsx'
import RowHints from '../components/Hints/RowHints.jsx'
import ColHints from '../components/Hints/ColHints.jsx'
import Toolbar from '../components/UI/Toolbar.jsx'
import '../app.css'

export default function App() {
    const {
        grid,
        currentLevel,
        mode,
        isWon,
        handleMouseDown,
        handleMouseEnter,
        handleMouseUp,
        toggleMode,
        resetGame,
        nextLevel,
        prevLevel
    } = useNonogram()

    return (
        <div className="app">
            <h1 className="title">Nonogram: Level #{currentLevel.id}</h1>
            <div className="app__game">
                <div className="app__top">
                    <div className="app__corner" />
                    <ColHints solution={currentLevel.solution} />
                </div>
                <div className="app__bottom">
                    <RowHints solution={currentLevel.solution} />
                    <Board
                        grid={grid}
                        colors={currentLevel.colors}
                        isWon={isWon}
                        onMouseDown={handleMouseDown}
                        onMouseEnter={handleMouseEnter}
                        onMouseUp={handleMouseUp}
                    />
                </div>
            </div>

            {isWon ? (
                <div className="app__win">
                    <p className="app__win-message">YOU WON! 🎉</p>
                    <div className="app__win-buttons">
                        <button className="win-btn" onClick={prevLevel}>← Prev</button>
                        <button className="win-btn" onClick={resetGame}>Retry</button>
                        <button className="win-btn win-btn--primary" onClick={nextLevel}>Next →</button>
                    </div>
                </div>
            ) : (
                <Toolbar mode={mode} onToggleMode={toggleMode} />
            )}
        </div>
    )
}