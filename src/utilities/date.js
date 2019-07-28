export const formatTWDateString = dateString => {
  const [ year, _month, _day ] = dateString.split('/');
  const month = ('0' + _month).slice(-2);
  const day = ('0' + _day).slice(-2);
  return `${year}/${month}/${day}`;
};

