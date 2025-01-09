export function convertDateTimeToLocal(dateString) {
    const utcDate = new Date(dateString);
    
    const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    };

    const localDate = utcDate.toLocaleString('ru-RU', options);
    return localDate.replace(',', '');
}