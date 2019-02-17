import dateConfig from 'configs/date';

export const declOfNum = (number, titles) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[(number > 4 && number < 20) ? 2 : cases[(number < 5) ? number : 5]];
};

export const formatDate = (value) => {
  const { months, daysOfWeek } = dateConfig;
  const [rawDay, rawMonth, rawYear] = value.split('.');
  const date = new Date(`${rawDay}/${rawMonth}/20${rawYear}`);

  const month = date.getMonth();
  const dayOfWeak = date.getDay();
  const day = date.getDate();
  const year = date.getFullYear();

  return `${day} ${months[month]} ${year}, ${daysOfWeek[dayOfWeak]}`;
};
