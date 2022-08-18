import express from 'express'
const app = express()
app.use(express.json()) //middleware to transform req.body to json file

const PORT = 3000

app.get('/ping', (_req, res) => { //_ typeScript lo ignora
    console.log('Hello!')
    res.send('pong')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})