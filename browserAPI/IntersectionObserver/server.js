const express = require('express')
const app = express()
const cors = require('cors')
const MOCK_DATA = new Array(10000).fill(1).map((el, idx) => idx)

app.use(cors())
app.get('/data', (req, res) => {
  const { page = 1, pageSize = 10 } = req.query
  setTimeout(() => {
    res.send(JSON.stringify({
      data: MOCK_DATA.slice((page - 1) * pageSize, page * pageSize)
     }))
  }, 500)
})

app.listen(8000, () => console.log('8000 start'))
