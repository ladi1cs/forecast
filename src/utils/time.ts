export const timeToDate = (time: number): Date => {
    return new Date(time && !isNaN(time) && time > 0 ? time : 0);
}

export const dateToTime = (date: Date): number => {
    return date ? date.getTime() : 0;
}

export const getStartDate = (startDate:Date, yearsPeriod: number): Date => {
    const today = new Date();
    const date = startDate && today > startDate ? new Date(startDate) : today;

    if(yearsPeriod && !isNaN(yearsPeriod) && yearsPeriod > 0){
        date.setFullYear(date.getFullYear() - yearsPeriod);
    }
    
    return date.getTime() > 0 ? date : new Date(0);
}