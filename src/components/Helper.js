export const formatDate = (value) => {
    var date = new Date(value);

    date = ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear();

    return date;
}

export const getStartMilliSecond = (date) => {
    return (new Date(`${date} 00:00:00`).getTime());
}

export const getEndMilliSecond = (date) => {
    return (new Date(`${date} 23:59:59`).getTime());
}