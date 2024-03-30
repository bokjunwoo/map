export const formatNumber = (number: number, unit?: '메소' | '경험치') => {
  if (number === 0) {
    return '0';
  }

  const units = [' ', '만', '억', '조', '경'];
  let result = '';
  let unitIndex = 0;

  number = Math.floor(number);

  while (number > 0) {
    const remainder = number % 10000;
    const chunk = remainder > 0 ? remainder + units[unitIndex] + ' ' : '';
    result = chunk + result;
    number = Math.floor(number / 10000);
    unitIndex++;
  }

  if (unit) {
    return result.trim() + ' ' + unit;
  } else {
    return result.trim();
  }
};
