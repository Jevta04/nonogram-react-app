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
        currentLevelIndex,
        mode,
        isWon,
        handleCellClick,
        toggleMode,
        resetGame,
        nextLevel,
        prevLevel
    } = useNonogram()

    return (
        <div className="app">
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
                        onCellClick={handleCellClick}
                    />
                </div>
            </div>

            {isWon ? (
                <div className="app__win">
                    <p className="app__win-message">Pobijedio si! 🎉</p>
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