import { useState, useEffect } from 'react'
import levels from '../levels/levels.json'
import { checkWin } from '../logic/checkWin.js'

function createEmptyGrid(size) {
    return Array.from({ length: size }, () => Array(size).fill(0))
}

export function useNonogram() {
    const [currentLevelIndex, setCurrentLevelIndex] = useState(0)
    const [currentLevel, setCurrentLevel] = useState(levels[0])
    const [grid, setGrid] = useState(() => createEmptyGrid(5))
    const [mode, setMode] = useState(1)
    const [isWon, setIsWon] = useState(false)

    useEffect(() => {
        if (checkWin(grid, currentLevel.solution)) {
            setIsWon(true)
        }
    }, [grid])

    function handleCellClick(row, col) {
        if (isWon) return
        setGrid(prevGrid => {
            const newGrid = prevGrid.map(r => [...r])
            const current = newGrid[row][col]
            newGrid[row][col] = current === mode ? 0 : mode
            return newGrid
        })
    }

    function toggleMode() {
        setMode(prev => prev === 1 ? 2 : 1)
    }

    function resetGame() {
        setGrid(createEmptyGrid(5))
        setIsWon(false)
    }

    function nextLevel() {
        const nextIndex = (currentLevelIndex + 1) % levels.length
        setCurrentLevelIndex(nextIndex)
        setCurrentLevel(levels[nextIndex])
        setGrid(createEmptyGrid(5))
        setIsWon(false)
    }

    function prevLevel() {
        const prevIndex = (currentLevelIndex - 1 + levels.length) % levels.length
        setCurrentLevelIndex(prevIndex)
        setCurrentLevel(levels[prevIndex])
        setGrid(createEmptyGrid(5))
        setIsWon(false)
    }

    return {
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
    }
}