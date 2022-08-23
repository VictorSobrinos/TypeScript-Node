import { newDiaryEntry } from "./type";

const parseComment = (commentFromRequest: any): string => {
    if (!isString(commentFromRequest)) {
        throw new Error('Incorrect or missing comment')
    }
    return commentFromRequest
}
const isString = (string: string): boolean => {
    return typeof string === 'string'
}
const toNewDiaryEntry = (object: any): newDiaryEntry => {
    const newEntry: newDiaryEntry = {
        comment: parseComment(object.comment)
        //...
    }
    return newEntry
}
export default toNewDiaryEntry