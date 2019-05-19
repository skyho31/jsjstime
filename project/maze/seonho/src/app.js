import {$} from './util'
import {COLUMN, ROW} from './constants'
import Map from './components/Map'

const $app = $('#app')
window.map = new Map(COLUMN, ROW, $app)
