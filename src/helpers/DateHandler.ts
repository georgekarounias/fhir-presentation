export const convertDatetoIsoStringWithoutTimeZone = (date: Date) => {
    const timezoneOffsetInMinutes = date.getTimezoneOffset();
    const timezoneOffsetInMilliseconds = timezoneOffsetInMinutes * 60 * 1000; // Convert to milliseconds
    const dateWithTimezone = new Date(date.getTime() - timezoneOffsetInMilliseconds); // Subtract the offset to get the date in UTC
     return dateWithTimezone.toISOString(); 
}