const express = require('express')
const customAlphabet = require('nanoid').customAlphabet
const path = require('path')
const mime = require('mime-types')
const app = express()
const multer = require('multer')
const port = 3000

const nanoid = customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 20)

console.log(nanoid())
console.log(mime.extension('image/jpeg'))
console.log(mime.extension('application/pdf'))

var storage = multer.diskStorage({
  destination: 'uploads/',
  filename: function (req, file, cb) {
    const name = `${file.originalname.toLowerCase()}.${mime.extension(file.mimetype)}`
    cb(null, name)
  },
})

const upload = multer({ storage })

app.use(express.static(path.join(__dirname, 'public')))

app.post('/', upload.single('invoiceFile'), (req, res) => {
  console.log(req.file)
  console.log(req.body)
  res.redirect('/thanks.html')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
