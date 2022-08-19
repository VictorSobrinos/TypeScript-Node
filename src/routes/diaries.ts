import express from 'express' //ESModules(import and export)
//const express = require('express)--> commonjs
import * as diaryServices from '../services/diaryServices'

const router = express.Router()

router.get('/', (_req, res) => {
    res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    const entry = diaryServices.finById(+id)
    res.send(entry)
})

router.post('/', (_req, res) => {
    // const { id, date, weather, visibility } = req.body

    res.send('Saving a diary')
})

export default router