export default function checkVictory(GRID, GRIDBuffer) {
  let count = 0
  for (let i = 0; i < GRID.length; i++) {
    for (let j = 0; j < GRID[i].length; j++) {
      if (GRID[i][j] === 1 && GRIDBuffer[i][j] === 1) {
        count++
      }
    }
  }
  return count
}
