const express = require('express')
const path = require('path')
const app = express()
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.post('/', upload.single('invoiceFile'), (req, res) => {
  console.log(req.query)
  console.log(req.body)
  console.log(req.file)
  res.send('Thank you')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
