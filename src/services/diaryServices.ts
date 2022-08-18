import { DiaryEntry } from '../type'
import diaryData from './diaries.json'
//"resolveJsonModule": true --> added in the config file to be able to read json file

const diaries: DiaryEntry[] = diaryData as DiaryEntry[] //<-- Aserción de tipos (evitar siempre que se pueda)
//DiaryEntry[] = Array<DiaryEntry>
export const getEntries = (): DiaryEntry[] => diaries

export const addEntry = () => null