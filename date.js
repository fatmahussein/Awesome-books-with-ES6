export function formatDate(date) {
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const formattedDate = date.toLocaleDateString(undefined, options);

  // Add ordinal indicator for the day
  const day = date.getDate();
  // eslint-disable-next-line no-use-before-define
  const ordinalIndicator = getOrdinalIndicator(day);
  const formattedDay = formattedDate.replace(/\b(\d+)\b/, `$1${ordinalIndicator}`);

  const time = date.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' });

  return `${formattedDay} ${time}`;
}
// JavaScript code for date and time

export function getOrdinalIndicator(day) {
  if (day >= 11 && day <= 13) {
    return 'th';
  }
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

export function updateTime() {
  const currentTimeElement = document.getElementById('current-time');
  const currentTime = new Date();
  currentTimeElement.textContent = formatDate(currentTime);
}
