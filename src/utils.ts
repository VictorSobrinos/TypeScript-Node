import { newDiaryEntry } from "./type";

const parseComment = (commentFromRequest: any): string => {
    if (typeof commentFromRequest !== 'string') {
        throw new Error('Incorrect or missing comment')
    }
    return commentFromRequest
}

const tpNewDiaryEntry = (object: any): newDiaryEntry => {
    const newEntry: newDiaryEntry = {
        comment: parseComment(object.comment)
        //...
    }
    return newEntry
}
export default tpNewDiaryEntry