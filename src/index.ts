import express from 'express'
import diaryRoutes from './routes/diaries'

const app = express()
app.use(express.json()) //middleware to transform req.body to json file

const PORT = 3000 //.env

app.get('/ping', (_req, res) => { //_ typeScript lo ignora
    console.log('Hello!')
    res.send('pong')
})
app.use('/api/diaries', diaryRoutes)
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})