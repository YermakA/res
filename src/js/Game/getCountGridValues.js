export default function getCountGridValues(GRID) {
  let count = 0
  for (let i = 0; i < GRID.length; i++) {
    for (let j = 0; j < GRID[i].length; j++) {
      if (GRID[i][j] === 1) {
        count += 1
      }
    }
  }
  return count
}
