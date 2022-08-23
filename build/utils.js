"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("./type");
const parseComment = (commentFromRequest) => {
    if (!isString(commentFromRequest)) {
        throw new Error('Incorrect or missing comment');
    }
    return commentFromRequest;
};
const parseDate = (DateFromRequest) => {
    if (!isString(DateFromRequest) || !isDate(DateFromRequest)) {
        throw new Error('Incorrect or missing date');
    }
    return DateFromRequest;
};
const parseWeather = (WeatherFromRequest) => {
    if (!isString(WeatherFromRequest) || !isWeather(WeatherFromRequest)) {
        throw new Error('Incorrect or missing weather');
    }
    return WeatherFromRequest;
};
const parseVisibility = (VisibilityFromRequest) => {
    if (!isString(VisibilityFromRequest) || !isVisibility(VisibilityFromRequest)) {
        throw new Error('Incorrect or missing visibility');
    }
    return VisibilityFromRequest;
};
const isString = (string) => {
    return typeof string === 'string';
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const isWeather = (weather) => {
    return Object.values(type_1.Weather).includes(weather);
};
const isVisibility = (visibility) => {
    return Object.values(type_1.Visibility).includes(visibility);
};
const toNewDiaryEntry = (object) => {
    const newEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
        //...
    };
    return newEntry;
};
exports.default = toNewDiaryEntry;
