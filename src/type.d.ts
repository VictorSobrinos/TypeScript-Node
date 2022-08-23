export type Visibility = 'great' | 'good' | 'ok' | 'poor'

export enum Weather {
    Sunny = 'sunny',
    Rainy = 'rainy',
    Claudy = 'cloudy',
    Windy = 'windy',
    Stormy = 'stormy'
}

export interface DiaryEntry {
    id: number;
    date: string;
    weather: Weather;
    visibility: Visibility;
    comment: string;
}

// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>
export type newDiaryEntry = Omit<DiaryEntry, 'id'>