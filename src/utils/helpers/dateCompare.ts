const today = new Date();
export const IsPreviousDate = (dateToCheck: Date) => {
    const date1 = new Date(today).getTime();
    const date2 = dateToCheck.getTime();
    return date1 < date2;
};
