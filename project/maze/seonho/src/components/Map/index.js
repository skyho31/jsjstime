import {
  $, $All,
  $mergeStyle,
  getRandomBoolean,
} from '../../util'
import mazeSearch from '../../core/mazeSearch'

class Map {
  constructor (column, row, $el) {
    this.column = column
    this.row = row
    this.$mapContainer = $el
    this.$me = $('#me')
    this.info = []

    this.drawMap()
  }

  // level 1
  drawMap () {
    this._resetElement(this.$mapContainer)
    this._resetMapInfo()

    const $fragment = document.createDocumentFragment()
    const $rowTemplate = this._createRowTemplate()

    let totalIdx = 0
    for (let rowIdx = 0; rowIdx < this.row; rowIdx++) {
      const $cloneTemplate = document.importNode($rowTemplate.content, true)
      const $row = $('.row', $cloneTemplate)
      const htmlArrForJoin = []
      const rowInfo = []
      for (let columnIdx = 0; columnIdx < this.column; columnIdx++) {
        const isDisabled = getRandomBoolean()
        htmlArrForJoin.push(`
          <div 
            class="box ${isDisabled ? 'disabled' : ''}"
            data-idx="${totalIdx}"
          ></div>
        `)
        totalIdx += 1
        rowInfo.push(isDisabled ? 1 : 0)
      }

      $row.innerHTML = htmlArrForJoin.join('').trim() 
      $fragment.appendChild($cloneTemplate)
      this.info.push(rowInfo)
    }
  
    this.$mapContainer.appendChild($fragment)
  }
  drawPath (pathArr) {
    this._resetPath()
    pathArr.forEach(position => {
      const $target = $(`.box[data-idx="${position}"`)
      $target.classList.add('path')

      console.assert(
        !$target.classList.contains('disabled'),
        `${position}의 블록은 막혀있습니다.`
      )
    })
  }
  drawCurrentPosition (position) {
    const [x, y] = this._getTargetPosition(position)
    $mergeStyle(this.$me, {
      top: y,
      left: x,
    })
  }
   findFastestPath (start, end) {
    const startPos = this._parseToXYPosition(start)
    const endPos = this._parseToXYPosition(end)
    const fastestXYPath = mazeSearch(this.info, startPos, endPos)
    const fastestPath = this._parseToGridPathArray(fastestXYPath)

    this.drawPath(fastestPath)
  }
  movePosition () {}

  // level 2
  _resetMapInfo () {
    this.info = []
  }
  _parseToXYPosition (position) {
    const x = position % this.column
    const y = Math.floor(position / this.column)

    return [ x, y ]
  }
  _parseToGridPathArray (pathArr) {
    return pathArr.map(([x, y]) => this._parseToGridPosition(x, y))
  }
  _resetElement ($el) {
    $el.innerHTML = ''
  }
  _createRowTemplate () {
    const $rowTemplate = document.createElement('template')
    $rowTemplate.innerHTML = '<div class="row"></div>'
    return $rowTemplate
  }
  _resetPath () {
    const boxes = $All('.box')
    boxes.forEach(box => {
      box.classList.remove('path')
    })
  }
  _getTargetPosition (position) {
    const $target = $(`.box[data-idx="${position}"]`)
    const [ targetPositionInfo ] = Array.from($target.getClientRects())
    return [
      targetPositionInfo.x, 
      targetPositionInfo.y
    ]
  }

  // level 3
  _parseToGridPosition ({x, y}) {
    return y * this.column + x
  }
}

export default Map
