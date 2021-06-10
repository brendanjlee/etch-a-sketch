// Create the grids
function drawBoard(size){
  let colorDivFrags = document.createDocumentFragment()
  for (let i = 0; i < (size**2); i++) {
    let colorDiv = document.createElement('div')
    colorDiv.style.borderStyle = 'solid'
    colorDivFrags.appendChild(colorDiv)
    colorDiv.setAttribute('class', 'tile')
    colorDiv.setAttribute('onmouseover', 'paint(this)')
    colorDiv.setAttribute('onclick', 'erase(this)')
  }
  // Append to grids
  const grids = document.querySelector('.grids')
  grids.appendChild(colorDivFrags)
}

function clearBoard() {
  const grids = document.querySelector('.grids')
  const tiles = Array.from(grids.childNodes)
  tiles.forEach((e) => {
    grids.removeChild(e)
  })
}

function paint(item) {
  item.style.backgroundColor = 'black'
}

function setGridSize(size) {
  const gridContainer = document.querySelector('.grids')
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 30px)`
  gridContainer.style.gridTemplateRows = `repeat(${size}, 30px)`
}

function resize() {
  let requestSize = prompt('New grid size')
  if (requestSize != null) {
    let size = requestSize
    if (requestSize > 64) {
      alert('Grid cannot be greater than 64x64')
      size = 64
    }
    if (requestSize < 1) {
      alert('Grid canot be smaller than 1x1')
      size = 1
    }
    setGridSize(size)
    drawBoard(size)
  }
}

function defaultGame() {
  setGridSize(16)
  drawBoard(16)
}

// main
defaultGame()