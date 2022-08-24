import express from 'express' //ESModules(import and export)
//const express = require('express)--> commonjs
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../utils'
// import Diary from '../models/diary.model'

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
    try {
        const newDiaryEntry = toNewDiaryEntry(req.body)

        const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)

        res.json(addedDiaryEntry)
    } catch (Error: any) {
        res.status(400).send(Error.message)
    }
})

export default router