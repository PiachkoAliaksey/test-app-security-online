export function calculateTimeDifference(date1, date2) {
    const start = new Date(date1);
    const end = new Date(date2);

    const differenceInSeconds = Math.floor((end - start) / 1000);

    const secondsInADay = 86400;
    const secondsInAnHour = 3600;

    if (differenceInSeconds < secondsInADay) {
        const hours = Math.floor(differenceInSeconds / secondsInAnHour);
        return `${hours} ${getHoursPadezh(hours)}`;
    } else {
        const days = Math.floor(differenceInSeconds / secondsInADay);
        return `${days} ${getDaysPadezh(days)}`;
    }
}

function getHoursPadezh(hours) {
    if (hours % 10 === 1 && hours % 100 !== 11) {
        return 'час';
    } else if ((hours % 10 >= 2 && hours % 10 <= 4) && (hours % 100 < 10 || hours % 100 >= 20)) {
        return 'часа';
    } else {
        return 'часов';
    }
}

function getDaysPadezh(days) {
    if (days % 10 === 1 && days % 100 !== 11) {
        return 'день';
    } else if ((days % 10 >= 2 && days % 10 <= 4) && (days % 100 < 10 || days % 100 >= 20)) {
        return 'дня';
    } else {
        return 'дней';
    }
}