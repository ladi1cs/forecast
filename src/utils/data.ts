import { dateToTime } from './time';

export const isValidArray = (arr:any): boolean => {
    return arr && Array.isArray(arr) && arr.length > 0;
}

export const extractChartData = (periods: any[], endDate: Date): any[] => {
    let points:number[] = [];

    if(!isValidArray(periods)){
        return points;
    }

    const start = dateToTime(new Date());
    const end = dateToTime(endDate);

    if(start > end ){
        return points;
    }
    
    return periods.filter(p => end > dateToTime(new Date(p.endTime))).map(p => p.temperature);
}