import { DiaryEntry, newDiaryEntry, NonSensitiveInfoDiaryEntry } from '../type'
import diaryData from './diaries.json'
//"resolveJsonModule": true --> added in the config file to be able to read json file

const diaries: DiaryEntry[] = diaryData as DiaryEntry[] //<-- Aserción de tipos (evitar siempre que se pueda)
//DiaryEntry[] = Array<DiaryEntry>
export const getEntries = (): DiaryEntry[] => diaries

export const finById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
    const entry = diaries.find(e => e.id === id)
    if (entry) {
        const { comment, ...noCommentDiary } = entry
        return noCommentDiary
    }
    return entry
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => {
        return {
            id,
            date,
            weather,
            visibility
        }
    })
}

export const addDiary = (newDiaryEntry: newDiaryEntry): DiaryEntry => {
    console.log('esto es newDiary', newDiaryEntry)
    const newDiary = {
        id: Math.max(...diaries.map(d => d.id)) + 1,
        ...newDiaryEntry
    }

    diaries.push(newDiary)
    return newDiary
}