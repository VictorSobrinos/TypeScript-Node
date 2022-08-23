import express from 'express' //ESModules(import and export)
//const express = require('express)--> commonjs
import * as diaryServices from '../services/diaryServices'

const router = express.Router()

router.get('/', (_req, res) => {
    res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    const entry = diaryServices.finById(+id) //+ para pasarlo a numérico
    res.send(entry)
})

router.post('/', (req, res) => {
    const { date, weather, visibility, comment } = req.body

    const newDiaryEntry = diaryServices.addDiary({
        date,
        weather,
        visibility,
        comment
    })

    res.json(newDiaryEntry)
})

export default router