import { newDiaryEntry } from "./type";
import { Visibility, Weather } from "./enums"

const parseComment = (commentFromRequest: any): string => {
    if (!isString(commentFromRequest)) {
        throw new Error('Incorrect or missing comment')
    }
    return commentFromRequest
}

const parseDate = (DateFromRequest: any): string => {
    if (!isString(DateFromRequest) || !isDate(DateFromRequest)) {
        throw new Error('Incorrect or missing date')
    }
    return DateFromRequest
}

const parseWeather = (WeatherFromRequest: any): Weather => {
    if (!isString(WeatherFromRequest) || !isWeather(WeatherFromRequest)) {
        throw new Error('Incorrect or missing weather')
    }
    return WeatherFromRequest
}

const parseVisibility = (VisibilityFromRequest: any): Visibility => {
    if (!isString(VisibilityFromRequest) || !isVisibility(VisibilityFromRequest)) {
        throw new Error('Incorrect or missing visibility')
    }
    return VisibilityFromRequest
}

const isString = (string: string): boolean => {
    return typeof string === 'string'
}

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date))

}

const isWeather = (weather: any): boolean => {
    return Object.values(Weather).includes(weather)

}

const isVisibility = (visibility: any): boolean => {
    return Object.values(Visibility).includes(visibility)

}
const toNewDiaryEntry = (object: any): newDiaryEntry => {
    const newEntry: newDiaryEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
        //...
    }
    return newEntry
}
export default toNewDiaryEntry