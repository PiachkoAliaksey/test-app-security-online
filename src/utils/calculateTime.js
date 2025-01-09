const PADEZH_DAY = ['день', 'дня', 'дней'];
const PADEZH_HOURS = ['час', 'часа', 'часов'];

export function calculateTimeDifference(date1, date2) {
    const start = new Date(date1);
    const end = new Date(date2);

    const differenceInSeconds = Math.floor((end - start) / 1000);

    const secondsInADay = 86400;
    const secondsInAnHour = 3600;

    if (differenceInSeconds < secondsInADay) {
        const hours = Math.floor(differenceInSeconds / secondsInAnHour);
        return `${hours} ${getPadezh(hours,PADEZH_HOURS)}`;
    } else {
        const days = Math.floor(differenceInSeconds / secondsInADay);
        return `${days} ${getPadezh(days,PADEZH_DAY)}`;
    }
}

function getPadezh(item, arrPadezh) {
    if (item % 10 === 1 && item % 100 !== 11) {
        return arrPadezh[0];
    } else if ((item % 10 >= 2 && item % 10 <= 4) && (item % 100 < 10 || item % 100 >= 20)) {
        return arrPadezh[1];
    } else {
        return arrPadezh[3];
    }
}
