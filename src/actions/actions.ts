import { actionTypes } from '../constants/actionTypes';

export const setData = (data: string[]) => {
    return { type: actionTypes.SET_DATA, payload: data };
}

export const setCurrent = (current: string) => {
    return { type: actionTypes.SET_CURRENT, payload: current };
}

export const setEndDate = (date: Date) => {
    return { type: actionTypes.SET_END_DATE, payload: date };
}