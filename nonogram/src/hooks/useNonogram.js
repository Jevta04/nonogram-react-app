import { useState, useEffect, useRef } from 'react'
import levels from '../levels/levels.json'
import { checkWin } from '../logic/checkWin.js'
import { autoFill } from '../logic/autoFill.js'

function createEmptyGrid(size) {
    return Array.from({ length: size }, () => Array(size).fill(0))
}

export function useNonogram() {
    const [currentLevelIndex, setCurrentLevelIndex] = useState(0)
    const [currentLevel, setCurrentLevel] = useState(levels[0])
    const [grid, setGrid] = useState(() => createEmptyGrid(5))
    const [mode, setMode] = useState(1)
    const [isWon, setIsWon] = useState(false)
    const isDragging = useRef(false)
    const dragMode = useRef(null) // za fix toggle-ovanja kod drag-a


    useEffect(() => {
        if (checkWin(grid, currentLevel.solution)) {
            setIsWon(true)
        }
    }, [grid])

    function handleMouseDown(row, col) {
        isDragging.current = true
        dragMode.current = mode

        // prvi klik uvijek toggle-uje normalno
        setGrid(prevGrid => {
            const newGrid = prevGrid.map(r => [...r])
            const current = newGrid[row][col]
            newGrid[row][col] = current === mode ? 0 : mode
            return autoFill(newGrid, currentLevel.solution)
        })
    }

    function handleMouseEnter(row, col) {
        if (!isDragging.current) return

        setGrid(prevGrid => {
            const newGrid = prevGrid.map(r => [...r])
            const current = newGrid[row][col]

            if (dragMode.current === 1 && current === 2) return newGrid
            if (dragMode.current === 2 && current === 1) return newGrid
            if (current !== dragMode.current) {
                newGrid[row][col] = dragMode.current
            }

            return autoFill(newGrid, currentLevel.solution)
        })
    }

    function handleMouseUp() {
        isDragging.current = false
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
        handleMouseDown,
        handleMouseEnter,
        handleMouseUp,
        toggleMode,
        resetGame,
        nextLevel,
        prevLevel
    }
}