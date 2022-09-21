// npm i express dotenv

const express = require('express')
const path = require('path') /* No install */

const port = process.env.PORT || 5000

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
})

app.listen(port, () => {
    console.log('Docked at port ' + port)
})