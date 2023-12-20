export const getSystemUserId = () => localStorage.getItem('tn-id');

export const getSystemUserRole = () => localStorage.getItem('tn-role');

export const getBookingInfo = () => {
    const tnBookingInfo: any = localStorage.getItem('tn-bookigInfo');
    return JSON.parse(tnBookingInfo);
};
